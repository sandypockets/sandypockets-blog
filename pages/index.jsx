import { Post } from "../components/hero/Post";
import { posts } from "../getAllPosts";
import HeroText from "../components/hero/HeroText";
import Tagline from "../components/hero/Tagline";

export default function IndexPage() {
  return (
    <div className="h-screen sm:mb-20 md:mb-36 lg:mb-48">
      <div className='mt-16 sm:mt-20 md:mt-24 lg:mt-30'>
        <HeroText />
        <Tagline />
      </div>
      <div className="mb-12 sm:mb-24">
        {posts.reverse().map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  );
}