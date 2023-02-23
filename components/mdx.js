import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
function Callout(props) {
  return (
    <div className="calloutBox">
      <div className="calloutEmoji">{props.emoji}</div>
      <div style={{ width: "100%" }}>{props.children}</div>
    </div>
  );
}
function Img(props) {
  return <Image {...props} alt={props.alt} width={200} height={270} />;
}
const components = {
  Callout,
  Img,
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
