"use client";
import { AiFillGithub } from "react-icons/ai";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return <button onClick={() => signOut()}>→ Sign out</button>;
}

export function SignIn() {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem",
        backgroundColor: "#000000",
        fontWeight: "600",
        color: "#fff",
        borderRadius: "0.25rem",
        border: "1px solid rgb(169,169,169,0.5)",
        cursor: "pointer",
      }}
      onClick={() => signIn("github")}
    >
      <AiFillGithub size={24} />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}
