import Highlight from "../utility/Highlight";

export default function ArticleTitle(props) {
  return (
    <div>
      <h1
        className={props.propsClass}
      >
        <Highlight content={props.meta.title} />
      </h1>
    </div>
  )
}