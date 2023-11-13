import {Connections} from "@/components";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-12">
      <h1 className="text-4xl font-bold">
        Summarize your notes with <b className="font-extrabold text-lime-950">Summarizer</b>
      </h1>

      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-xl text-center ">
          Summarizer is a tool that summarizes your notes in a few sentences.
          <br />
          It uses AI to understand their context and extract the most relevant and important information.
        </p>
      </div>

      <div className="flex flex-col items-center py-4 px-8 border border-lime-950 justify-center space-y-4 flex-1 bg-white border-dashed rounded">
        <p className="text-2xl text-center ">
          Connect with your favorite note-taking app and start using Summarizer today.
        </p>

        <Connections />

        <p className="text-md">
          Other note-taking apps coming soon.
        </p>
      </div>
    </main>
  )
}
