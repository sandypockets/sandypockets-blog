import Logos from "../components/logos/Logos";
import Highlight from "../components/utility/Highlight";

export default function About({ secondaryTextColour }) {
  return (
    <div className="pt-24 mb-12 h-full sm:pt-24 sm:my-11 sm:mx-22 md:mx-8 lg:mx-14 xl:mx-32 2xl:max-w-7xl">
      <div className={secondaryTextColour + " text-3xl pl-6 sm:text-6xl sm:leading-20 sm:pl-3 sm:mb-20 md:text-7xl md:pl-5 lg:pl-16 xl:text-8xl 2xl:text-9xl xl:pl-14 2xl:pl-16 font-bold"}>
        <p>I'm a serial learner,{' '}
          <br/>
          helping to build a <Highlight content="safe"/>, <Highlight content="open"/>, and <Highlight content="inclusive"/> internet.</p>
      </div>
      <h2 className="flex justify-center font-mono tracking-tight mt-12 lg:mt-24 mb-4 text-2xl text-gray-400">My Tech Stack</h2>
      <div>
        <Logos />
      </div>
    </div>
  )
}