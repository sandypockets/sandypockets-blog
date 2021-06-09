import Highlight from "../components/Highlight";

export default function PageNotFound() {
  return (
    <div className="flex flex-col m-4">
      <Highlight propsClass="text-9xl text-center" content="404" />
      <Highlight propsClass="text-5xl text-center h-20" content="Page not found" />
      <br/>
    </div>
  )
}