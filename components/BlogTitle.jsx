import Link from "next/link";

export default function BlogTitle(props) {
  return (
    <h1 className={props.propsClass}>
      <Link href={props.meta.href}>
        <a>{props.meta.title}</a>
      </Link>
    </h1>
  )
}