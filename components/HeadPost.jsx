import Date from "./Date";
import ReadingTime from "./ReadingTime";
import BlogTitle from "./BlogTitle";
import Description from "./Description";

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <BlogTitle propsClass="text-4xl" meta={meta} />
    <div>
      <Description isBlogPost={isBlogPost} meta={meta} />
      <Date meta={meta} />
      <ReadingTime meta={meta} />
    </div>
  </>
)
