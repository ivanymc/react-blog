import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { _id } = useParams();
    const { data: blog, isLoading, error } = useFetch('https://react-blog-backend.onrender.com/reactblogs/' + _id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://react-blog-backend.onrender.com/reactblogs/' + blog._id, { method: "DELETE" })
            .then( res => {
                res.json();
                console.log("Blog Deleted");
                history.push("/");
            })
    }

    return ( 
        <div className="blog-details">
            { error && <div> { error } </div>}
            { isLoading && <div> Loading... </div> }
            { blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <p> Written by { blog.author } </p>
                    <div> { blog.body } </div>
                    <button onClick={ handleClick }> Delete </button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;