import Link from 'next/link'

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
  <h1 className="text-4xl">
    <Link href={meta.href}>
      <a>{meta.title}</a>
    </Link>
  </h1>
    <div className='details'>
      {
        isBlogPost? null: <p>{meta.description}</p>
      }
      <span className="text-md pr-4">{meta.date}</span>
      <span className="text-md" role='img' aria-label='one coffee'>
        {meta.readTime + ' min read'}
      </span>
    </div>
  </>
)
