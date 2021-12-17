import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPendind, error } = useFetch('http://localhost:8000/blogs/'+ id);
  const history = useHistory();
  const handleClick = ()=>{
      fetch("http://localhost:8000/blogs/" + blog.id, {
          method: 'DELETE'

      }).then(()=>{
        history.push('/');
      })
  }
  return (
    <div className="blog-details">
     {isPendind && <div> Loaading ...</div> }
     {error && <div>{error}</div>}
     {blog && (
         <article>
             <h2>
                 {blog.title}
             </h2>
             <p>
                 Written By {blog.author}
             </p>
             <div>
                 {blog.body}
             </div>
             <button onClick={handleClick}>Delete</button>
         </article>
     )}
    </div>
  );
};

export default BlogDetails;
