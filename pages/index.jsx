import { Post } from "../components/hero/Post";
import { posts } from "../getAllPosts";
import HeroText from "../components/hero/HeroText";
import Tagline from "../components/hero/Tagline";

export default function IndexPage() {
  return (
    <div className="pt-16">
      <div className='sm:mt-20 md:mt-24 lg:mt-30'>
        <HeroText />
        <Tagline />
      </div>
      <div className="mb-12 sm:mb-24">

        {posts.sort((a ,b) => {
          return b.module.meta.id - a.module.meta.id
        }).map((post) => (
          <Post key={post.module.meta.id} post={post} />
        ))}
      </div>
    </div>
  );
}