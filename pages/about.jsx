import Logos from "../components/logos/Logos";
import SectionSeparator from "../components/utility/SectionSeparator";
import Highlight from "../components/utility/Highlight";

export default function About() {
  return (
    <div className="my-11 mx-40">
      <div className="text-8xl leading-20 font-bold text-gray-100">
        <p>I'm a serial learner, dedicated to a <Highlight content="safer"/>, <Highlight content="open"/>, and <Highlight content="inclusive"/> internet.</p>
      </div>
      <h2 className="flex justify-center mt-24 mb-3 text-3xl text-gray-400">My Tech Stack</h2>
      <div>
        <Logos />
      </div>
      <SectionSeparator />
    </div>
  )
}