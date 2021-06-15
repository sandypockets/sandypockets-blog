import ArticleTitle from "./ArticleTitle";
import Description from "./Description";

export default function BlogPost({ children, meta }) {
  return (
    <>
      <div className="pb-16 sm:my-11 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <ArticleTitle propsClass="flex justify-center h-auto pb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 sm:pb-7 sm:text-7xl lg:text-8xl 2xl:text-9xl " meta={meta} />
        <Description isBlogPost meta={meta} />
        <article className="mt-4 flex justify-center">{children}</article>
      </div>
    </>
  )
}