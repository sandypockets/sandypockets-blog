import Date from "../article/Date";
import ReadingTime from "../article/ReadingTime";
import BlogTitle from "./BlogTitle";
import Description from "../article/Description";

export const HeroPost = ({ meta, isBlogPost }) => (
  <>
    <BlogTitle propsClass="text-4xl font-mono" meta={meta} />
    <div className="font-mono">
      <Description isBlogPost={isBlogPost} meta={meta} />
      <Date meta={meta} />
      <ReadingTime meta={meta} />
    </div>
  </>
)
