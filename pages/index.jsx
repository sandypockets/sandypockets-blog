import { Post } from "../components/hero/Post";
import { posts } from "../getAllPosts";
import Heading from "../components/hero/Heading";
import Tagline from "../components/hero/Tagline";
import SectionSeparator from "../components/utility/SectionSeparator";

export default function IndexPage() {
  return (
    <div>
      <div>
        <Heading />
        <Tagline />
      </div>
      <div className="mb-24">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
      <SectionSeparator />
    </div>
  );
}