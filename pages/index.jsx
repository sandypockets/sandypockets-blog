// import styles from '../styles/Home.module.css'

import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <div>

      <div className="text-7xl text-indigo-500 mb-11">
        <h1>The Title!</h1>
        <p>Some sort of tagline goes here!</p>
      </div>

      <div>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  );
}