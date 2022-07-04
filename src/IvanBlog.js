import BlogList from './BlogList';
import useFetch from './useFetch';

const IvanBlog = () => {

    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isLoading && <div> Loading... </div> }
            { blogs && <BlogList blogs={ blogs.filter( (blog) => blog.author === "Ivan") } title="Ivan's Blogs" /> }
        </div>
    );
}
 
export default IvanBlog;