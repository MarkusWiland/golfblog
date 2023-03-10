import "./globals.css";
import ContentTable from "../components/contentTable.js";
import Header from "../components/Header/header.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="layout">
          <div className="layoutHeader layoutColumn2">
            <Header />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
