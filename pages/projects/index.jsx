import Highlight from "../../components/utility/Highlight";

export default function ProjectIndex() {
  return (
    <div className="h-screen w-screen m-auto">
      <h1 className='text-9xl font-bold flex justify-center'>
        <Highlight propsClass='pb-12' content='Projects' />
      </h1>

      <div className='flex justify-center'>
        <div>
          <h2>
            Coming soon.
          </h2>
        </div>
      </div>
    </div>
  )
}