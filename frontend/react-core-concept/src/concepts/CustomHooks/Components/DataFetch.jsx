import useFetch from "../Hooks/useFetch";

const DataFetch = () => {
  // const [users, setUsers] = useState([]);
  // const [userLoading, setUserLoading] = useState(false);
  // const [userError, setUserError] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [postLoading, setPostLoading] = useState(false);
  // const [postError, setPostError] = useState("");

  // useEffect(() => {
  //   fetchUsers();
  //   fetchPosts();
  // }, []);

  // const fetchUsers = async () => {
  //   setUserLoading(true);

  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const users = await data.json();
  //     setUsers(users);
  //     setUserLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //     setUserError("Server Error Occured");
  //     setUserLoading(false);
  //   }
  // };

  // const fetchPosts = async () => {
  //   setPostLoading(true);

  //   try {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const posts = await data.json();
  //     setPosts(posts);
  //     setPostLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //     setPostError("Server Error Occured");
  //     setPostLoading(false);
  //   }
  // };

  const {
    data: users,
    loading: userLoading,
    error: userError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const {
    data: posts,
    loading: postLoading,
    error: postError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h3>Data fetch by custom hook</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-beetween",
          gap: "1rem",
          width: "80%",
          margin: "auto",
        }}
      >
        <div>
          <h2>Users</h2>
          {userLoading && <h3>Loading</h3>}
          {userError && <h3>{userError}</h3>}
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>

        <div>
          <h2>Posts</h2>
          {postLoading && <h3>Loading</h3>}
          {postError && <h3>{postError}</h3>}
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataFetch;
