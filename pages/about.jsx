import Logos from "../components/logos/Logos";
import SectionSeparator from "../components/utility/SectionSeparator";
import Highlight from "../components/utility/Highlight";

export default function About() {
  return (
    <div className="sm:my-11 sm:mx-40">
      <div className="text-xl sm:text-8xl sm:leading-20 font-bold text-gray-100">
        <p>I'm a serial learner,{' '}
          <br/>
          dedicated to a <Highlight content="safer"/>, <Highlight content="open"/>, and <Highlight content="inclusive"/> internet.</p>
      </div>
      <h2 className="flex justify-center mt-12 lg:mt-24 mb-4 text-2xl text-gray-400">My Tech Stack</h2>
      <div>
        <Logos />
      </div>
      <SectionSeparator />
    </div>
  )
}