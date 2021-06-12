import {posts} from "../../getAllPosts";
import {Post} from "../../components/hero/Post";
import Highlight from "../../components/utility/Highlight";

export default function Index() {
  return (
    <div>
      <h1 className="flex justify-center h-40 md:h-44 pb-11 text-8xl 2xl:text-9xl 2xl:h-60 font-bold "><Highlight content="Blog" /></h1>
      <div className="sm:mb-20">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  )
}