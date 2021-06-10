import ArticleTitle from "./ArticleTitle";
import Description from "./Description";

export default function BlogPost({ children, meta}) {
  return (
    <>
      <div className="my-11 mx-48">
        <ArticleTitle propsClass="flex justify-center h-auto pb-11 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600" meta={meta} />
        <Description isBlogPost meta={meta} />
        <article className="mt-4 flex justify-center text-gray-300">{children}</article>
      </div>
    </>
  )
}