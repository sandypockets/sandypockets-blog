import Date from "../article/Date";
import ReadingTime from "../article/ReadingTime";
import BlogTitle from "./BlogTitle";
import Description from "../article/Description";

export const HeroPost = ({ meta, isBlogPost }) => (
  <>
    <BlogTitle propsClass="font-mono text-2xl sm:text-4xl md:text-5xl" meta={meta} />
    <div className="font-mono">
      <Description isBlogPost={isBlogPost} meta={meta} />
      <Date meta={meta} />
      <ReadingTime meta={meta} />
    </div>
  </>
)
