import { Post } from "../components/hero/Post";
import { posts } from "../getAllPosts";
import HeroText from "../components/hero/HeroText";
import Tagline from "../components/hero/Tagline";
// import SectionSeparator from "../components/utility/SectionSeparator";

export default function IndexPage() {
  return (
    <div className="h-screen mb-36">
      <div>
        <HeroText />
        <Tagline />
      </div>
      <div className="mb-12 sm:mb-24">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
      {/*<SectionSeparator />*/}
    </div>
  );
}