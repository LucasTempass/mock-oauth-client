import { Connections } from "@/components";
import { kv } from "@vercel/kv";
import { CgPathIntersect } from "react-icons/cg";
import { SummarizeButton } from "@/components/SummarizeButton";
import { auth } from "@clerk/nextjs";

export interface Note {
  userId: string;
  date: Date;
  title: string;
  content: string;
  id: string;
}

async function getNotes(accessToken: unknown): Promise<Note[]> {
  if (!accessToken) {
    return [];
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_RESOURCE_URL}/note`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log("notes response", response);

  if (!response.ok) {
    return [];
  }

  const { data } = await response.json();

  console.log("notes", data);

  return data;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const { userId } = auth();

  const accessToken = await kv.get(`access_token:${userId}`);

  const notes: Note[] = await getNotes(accessToken);

  const notesWithContent = notes.filter((note) => note.content);

  return (
    <div className="flex flex-col items-center p-8 w-full max-w-4xl border border-lime-950 justify-center space-y-4 bg-white border-dashed rounded">
      {accessToken ? (
        <section className="w-full flex flex-col flex-1">
          <h2 className="text-2xl font-bold pb-4">Your notes:</h2>

          {notes.length ? (
            <div className="space-y-6">
              {notesWithContent.map((note: Note) => (
                <div
                  className="border p-4 rounded border-cyan-950 flex flex-col space-y-4"
                  key={note.id}
                >
                  <div className="flex items-center space-x-2">
                    <div>
                      <CgPathIntersect className="text-cyan-900 text-4xl" />
                    </div>

                    <div className="space-y-1 flex-1">
                      <h6 className="text-xl font-bold">{note.title}</h6>

                      <p className="line-clamp-2">{note.content}</p>

                      <p>
                        Updated at:{" "}
                        {new Date(note.date).toLocaleString("pt-BR", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          minute: "numeric",
                          hour: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <SummarizeButton />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-2xl text-center">No notes found.</p>
          )}
        </section>
      ) : (
        <>
          <p className="text-2xl text-center ">
            Connect with your favorite note-taking app and start using
            Summarizer today.
          </p>

          <Connections />

          <p className="text-md">Other note-taking apps coming soon.</p>
        </>
      )}
    </div>
  );
}
