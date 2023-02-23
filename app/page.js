import styles from "./page.module.css";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <main className={`layoutColumn3`}>
        <div className={styles.info}>
          <h1>Markus Wiland Golf</h1>
          <p>
            Jag heter Markus Wiland och spelar Golf, jag har 18,2 i HCP. Min
            hemmabana är Vårgårda Golfklubb.
          </p>
        </div>

        <span className={styles.borderLine}></span>
        <div className={styles.blog}>
          {allPosts.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`}>
              <div className={styles.blogPost} key={idx}>
                <h2>{blog.title}</h2>
                <p>
                  {new Date(blog.date).toLocaleDateString("sv-SV", options)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
