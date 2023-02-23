"use client";
import styles from "../app/page.module.css";
import { useState, useEffect } from "react";
export default function ContentTable() {
  const [head, setHead] = useState([]);
  console.log("head", head);
  const minLevel =
    head?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = document.querySelectorAll("h3, h4, h5, h6");

    const arr = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";
      arr.push({ id, level, text });
    });
    setHead(arr);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "150px",
      }}
    >
      {head.length ? (
        <h1 style={{ paddingBottom: ".5rem" }}>Innehåll</h1>
      ) : null}

      {head &&
        head?.map((o, ind) => (
          <a
            href={`#${o.id}`}
            className={styles.h3}
            key={ind}
            style={{ marginLeft: (o.level - minLevel) * 10 }}
          >
            {o.text.replaceAll("-", " ")}
          </a>
        ))}
    </div>
  );
}
