export default function Description(props) {
  return (
    <div className="text-sm my-1 sm:my-2 sm:text-lg md:text-xl">
      {props.isBlogPost? null: <p>{props.meta.description}</p>}
    </div>
  )
}