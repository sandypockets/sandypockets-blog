import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    module: { meta },
  } = post

  return (
    <article className="mb-6">
      <HeadPost meta={meta} />
      <Link href={meta.href}>
        <a>Read post →</a>
      </Link>
    </article>
  )
}