import Highlight from "../components/utility/Highlight";

export default function Custom500() {
  return (
    <div className="flex flex-col m-4">
      <Highlight propsClass="text-9xl font-bold text-center" content="500" />
      <Highlight propsClass="text-5xl text-center h-20" content="A server-side error occurred." />
    </div>
  )
}