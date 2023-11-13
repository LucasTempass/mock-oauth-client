"use client";

import { CgPathIntersect } from "react-icons/cg";

export function Connections() {
  const onClick = () => {
    // TODO implementar conexão com o SimpleNotes
    const url = new URL(process.env.NEXT_PUBLIC_AUTHORIZE_URL as string);

    const searchParams = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
      scope: "read",
    });

    window.open(`${url}?${searchParams.toString()}`, "_blank");
  };

  return (
    <button
      onClick={onClick}
      className="h-11 rounded-md px-4 bg-lime-950 text-white hover:opacity-70
     inline-flex items-center justify-center text-sm font-medium ring-offset-white
      focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-slate-950 focus-visible:ring-offset-2
         disabled:pointer-events-none disabled:opacity-50"
    >
      <CgPathIntersect className="mr-2 text-xl text-white" />
      Connect with Simple<b>Notes</b>
    </button>
  );
}
