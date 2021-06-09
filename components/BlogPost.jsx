import BlogTitle from "./BlogTitle";
import Description from "./Description";

export default function BlogPost({ children, meta}) {
  return (
    <>
      <div className="my-11 mx-48">
        <BlogTitle propsClass="h-auto pb-11 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" meta={meta} />
        <Description isBlogPost meta={meta} />
        <article className="mt-4">{children}</article>
      </div>
    </>
  )
}