import Highlight from "../components/Highlight";

export default function Custom500() {
  return (
    <div className="flex flex-col m-4">
      <Highlight propsClass="text-9xl text-center" content="500" />
      <Highlight propsClass="text-5xl text-center h-20" content="Server-side error occurred" />
      <br/>
    </div>
  )
}