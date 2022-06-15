import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, message} = useFetch("http://localhost:8000/blogs")
  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title="All Blogs!" />
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
};

export default Home;
