export default function ReadingTime(props) {
  return (
    <span className="text-md" role='img' aria-label='one coffee'>
        {props.meta.readTime + ' min read'}
      </span>
  )
}