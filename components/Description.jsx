export default function Description(props) {
  return (
    <div>
      {props.isBlogPost? null: <p>{props.meta.description}</p>}
    </div>
  )
}