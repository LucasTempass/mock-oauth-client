"use client";

export default function Error() {
  return (
    <div className="flex flex-col items-center py-4 px-8 border border-lime-950 justify-center space-y-4 flex-1 bg-white border-dashed rounded">
      <p className="text-2xl text-center ">
        There was an error connecting to your note-taking app.
        <br />
        Please try again.
      </p>
    </div>
  );
}
