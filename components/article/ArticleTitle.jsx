import Link from "next/link";

export default function ArticleTitle(props) {
  return (
    <div>
      <h1
        className={props.propsClass}
      >
        <Link href={props.meta.href}>
          <a>{props.meta.title}</a>
        </Link>
      </h1>
    </div>
  )
}