import BlogList from "./BlogList";
import useFetch from "./useFetch"; // Custom hook to fetch data

const Home = () => {
  const{ data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
// Custom hook to fetch blogs from the API

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;