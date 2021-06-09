import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <div className="my-11 mx-64">
        <HeadPost meta={meta} isBlogPost />
        <article className="mt-4">{children}</article>
      </div>
    </>
  )
}