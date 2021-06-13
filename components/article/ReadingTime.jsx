export default function ReadingTime(props) {
  return (
    <span className="text-md text-green-400">
        {props.meta.readTime + ' min read'}
      </span>
  )
}