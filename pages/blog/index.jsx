import {posts} from "../../getAllPosts";
import {Post} from "../../components/hero/Post";
import Highlight from "../../components/utility/Highlight";

export default function Index() {
  return (
    <div>
      <h1 className="flex justify-center h-40 md:h-44 pb-11 text-8xl font-bold "><Highlight content="Blog" /></h1>
      <div className="mb-24">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  )
}