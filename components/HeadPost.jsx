import Link from 'next/link'
import Date from "./Date";
import ReadingTime from "./ReadingTime";

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
      <Date meta={meta} />
      <ReadingTime meta={meta} />
    </div>
  </>
)
