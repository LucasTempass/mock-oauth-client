import {CgPathIntersect} from 'react-icons/cg'

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

        <button
          className="h-11 rounded-md px-4 bg-lime-950 text-white hover:opacity-70 inline-flex items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          <CgPathIntersect className="mr-2 text-xl text-white" /> Connect with Simple<b>Notes</b>
        </button>

        <p className="text-md">
          Other note-taking apps coming soon.
        </p>
      </div>
    </main>
  )
}
