import "../../globals.css";
import { Mdx } from "components/mdx";
import { allPosts, Post } from "contentlayer/generated";
import ContentTable from "../../../components/contentTable";
export default async function page({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (!post) {
    console.log("gello");
  }

  return (
    <div className="blog">
      <div className="blogContentLeft">
        <h1>{post.title}</h1>
        <p
          style={{
            fontSize: "small",
            color: "gray",
            paddingBottom: "1rem",
            paddingTop: ".75rem",
          }}
        >
          {new Date(post.date).toLocaleDateString("sv-SV", options)}
        </p>
        <hr />
        <Mdx code={post.body.code} />
      </div>
      <div className="blogContentRight">
        <ContentTable />
      </div>
    </div>
  );
}
