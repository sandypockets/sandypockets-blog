export default function ReadingTime(props) {
  return (
    <span className="text-md text-purple-500">
        {props.meta.readTime + ' min read'}
      </span>
  )
}