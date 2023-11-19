import { Connections } from "@/components";
import { kv } from "@vercel/kv";

async function getNotes(accessToken: unknown): Promise<object[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RESOURCE_URL}/note`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log("notes response", response);

  if (!response.ok) {
    return [];
  }

  const notes = await response.json();

  console.log("notes", notes);

  return notes;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const accessToken = await kv.get("access_token");

  const notes: object[] = accessToken ? await getNotes(accessToken) : [];

  return (
    <div className="flex flex-col items-center py-4 px-8 border border-lime-950 justify-center space-y-4 flex-1 bg-white border-dashed rounded">
      <p className="text-2xl text-center ">
        Connect with your favorite note-taking app and start using Summarizer
        today.
      </p>

      {!accessToken && <Connections />}

      <p className="text-md">Other note-taking apps coming soon.</p>
    </div>
  );
}
