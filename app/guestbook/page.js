import { SignIn, SignOut } from "./actions";
import Form from "./form";
import { getServerSession } from "next-auth/react";
import supabase from "../../utils/supabase";
import { authOptions } from "pages/api/auth/[...nextauth]";
async function getGuestbook() {
  const data = await supabase.from("guestbook").select("*");
  return data;
}

export default async function Guestbook() {
  const session = await getServerSession(authOptions);
  console.log("session in frontend", session);
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const add = async () => {
    const { error } = await supabase.from("guestbook").insert({
      body: text,
      id: session?.user?.id,
      name: session?.user?.name,
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Gästbok</h1>
      {session?.user ? (
        <>
          <form onSubmit={add}>
            <input type="text" value={text} onChange={handleChange} />
            <button>add</button>
          </form>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      {/* {entries?.map((entry, idx) => (
        <div
          key={idx}
          className="flex flex-col space-y-1 mb-4"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: ".25rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ width: "100%" }}>
            <span style={{ marginRight: ".5rem", color: "#A3A3A3" }}>
              {session?.user.name}:
            </span>
            {entry.body}
          </div>
        </div>
      ))} */}
    </div>
  );
}
