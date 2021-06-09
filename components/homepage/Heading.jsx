import Highlight from "../Highlight";

export default function Heading() {
  return (
    <div className="text-9xl font-bold">
      <h1>Hi. I'm Zac,{' '}
        <br/>
        a <Highlight content="full stack developer" />{' '}
        <br/>
        in Canada.</h1>
    </div>
  )
}