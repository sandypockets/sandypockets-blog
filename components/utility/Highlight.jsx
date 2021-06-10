export default function Highlight(props) {
  return (
    <span className={props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"}>{props.content}</span>
  )
}