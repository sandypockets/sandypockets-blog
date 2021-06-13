import Date from "../article/Date";
import ReadingTime from "../article/ReadingTime";
import BlogTitle from "./BlogTitle";
import Description from "../article/Description";

export const HeroPost = ({ meta, isBlogPost }) => (
  <>
    <BlogTitle propsClass="font-mono pt-2 text-2xl sm:text-4xl md:text-5xl md:pb-2" meta={meta} />
    <div className="font-mono">
      <Description isBlogPost={isBlogPost} meta={meta} />
      <Date meta={meta} />
      <ReadingTime meta={meta} />
    </div>
  </>
)
