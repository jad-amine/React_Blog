import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, message } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
};

export default BlogDetails;
