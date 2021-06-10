import {posts} from "../../getAllPosts";
import {Post} from "../../components/hero/Post";
import Highlight from "../../components/utility/Highlight";

export default function Index() {
  return (
    <div>
      <h1 className="flex justify-center h-auto pb-11 text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Blog</h1>
      <div className="mb-24">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  )
}