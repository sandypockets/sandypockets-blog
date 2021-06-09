import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import Heading from "../components/homepage/Heading";
import Tagline from "../components/homepage/Tagline";

export default function IndexPage() {
  return (
    <div>
      <div>
        <Heading />
        <Tagline />
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  );
}