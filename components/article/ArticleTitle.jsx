import Link from "next/link";

export default function ArticleTitle(props) {
  return (
    <div>
      <h1
        className={props.propsClass}
      >
        {props.meta.title}
      </h1>
    </div>
  )
}