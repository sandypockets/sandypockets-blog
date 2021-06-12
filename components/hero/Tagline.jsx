import SectionSeparator from "../utility/SectionSeparator";

export default function Tagline() {
  return (
    <div className="font-mono font-normal text-m font-semi-bold sm:text-2xl md:text-3xl lg:text-4xl mt-10 sm:mb-24">
      <p>
        When I'm not building things, I'm writing about programming.{' '}
        <p className="text-s sm:text-xl md:text-xl lg:text-2xl">
          <br/>
          Opinions are my own.
        </p>
      </p>
      <SectionSeparator />
    </div>
  )
}