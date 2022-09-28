import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('https://node-blog-m1eg.onrender.com/reactBlogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://node-blog-m1eg.onrender.com/reactBlogs/' + blog.id, {
            method: "DELETE"
        }).then( () => {
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