import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  const response = await fetch(process.env.NEXT_PUBLIC_TOKEN_URL as string, {
    method: "POST",
    body: JSON.stringify({
      grantType: "authorization_code",
      authorizationCode: code,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  });

  if (response.status !== 200) {
    return NextResponse.json(
      {
        error: "invalid_grant",
        error_description: "Invalid authorization code.",
      },
      {
        status: 400,
      },
    );
  }

  const data = await response.json();

  const id = data["id"];

  console.log(`Saving token for ${id}`);

  await kv.set(`access_token:${id}`, data["access_token"]);

  return NextResponse.json({
    message: "ok",
  });
}
