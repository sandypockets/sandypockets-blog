import {posts} from "../../getAllPosts";
import {Post} from "../../components/hero/Post";
import Highlight from "../../components/utility/Highlight";

export default function Index() {
  return (
    <div className='pt-20'>
      <h1 className="flex justify-center h-40 md:h-48 text-8xl 2xl:text-9xl 2xl:h-60 font-bold "><Highlight propsClass='flex flex-col justify-center' content="Blog" /></h1>
      <div className="h-auto sm:mb-20">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  )
}