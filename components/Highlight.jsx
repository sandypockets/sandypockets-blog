export default function Highlight(props) {
  return (
    <span className={props.propsClass + " text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"}>{props.content}</span>
  )
}