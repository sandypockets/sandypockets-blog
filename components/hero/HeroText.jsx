import Highlight from "../utility/Highlight";

export default function HeroText() {
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