export default function ReadingTime(props) {
  return (
    <span className="text-md text-purple-600">
        {props.meta.readTime + ' min read'}
      </span>
  )
}