import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    module: { meta },
  } = post

  return (
    <article className="mb-6">
      <HeadPost meta={meta} />
    </article>
  )
}