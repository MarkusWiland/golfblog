import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  console.log("SESION IN BACKEND", session);
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  return res.json({
    message: "Success",
  });
}
