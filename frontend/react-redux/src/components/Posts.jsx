import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

const Posts = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <section>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {posts &&
          posts.map((post) => (
            <article>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default Posts;
