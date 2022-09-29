import BlogList from './BlogList';
import useFetch from './useFetch';

const IvanBlog = () => {

    const { data: blogs, isLoading, error } = useFetch("https://react-blog-backend.onrender.com/reactblogs");

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isLoading && <div> Loading... </div> }
            { blogs && <BlogList blogs={ blogs.filter( (blog) => blog.author === "Ivan") } title="Ivan's Blogs" /> }
        </div>
    );
}
 
export default IvanBlog;