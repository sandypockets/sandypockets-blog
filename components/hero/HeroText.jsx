import Highlight from "../utility/Highlight";

export default function HeroText() {
  return (
    <div className="text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
      <h1>Hi. I'm Zac,{' '}
        <br/>
        a <Highlight content="full stack developer" />{' '}
        <br/>
        in Canada.</h1>
    </div>
  )
}