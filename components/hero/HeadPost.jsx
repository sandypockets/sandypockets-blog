import Date from "../article/Date";
import ReadingTime from "../article/ReadingTime";
import BlogTitle from "../article/BlogTitle";
import Description from "../article/Description";

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
