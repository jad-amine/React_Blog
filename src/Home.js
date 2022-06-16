// Used react-router-dom version 5 
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // custom hook
  const { data: blogs, message } = useFetch("http://localhost:8000/blogs");
  
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
