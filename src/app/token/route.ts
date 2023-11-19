import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);

  await kv.set("client:token", body);

  return NextResponse.json({
    message: "ok",
  });
}
