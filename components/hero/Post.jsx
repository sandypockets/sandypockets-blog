import Link from 'next/link'
import { HeroPost } from './HeroPost'

export const Post = ({ post }) => {
  const {
    module: { meta },
  } = post

  return (
    <article className="mb-6">
      <HeroPost meta={meta} />
    </article>
  )
}