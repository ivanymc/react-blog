import BlogList from './BlogList';
import useFetch from './useFetch';

const IvanBlog = () => {

    const { data: blogs, isLoading, error } = useFetch("https://node-blog-m1eg.onrender.com/reactblogs");

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isLoading && <div> Loading... </div> }
            { blogs && <BlogList blogs={ blogs.filter( (blog) => blog.author === "Ivan") } title="Ivan's Blogs" /> }
        </div>
    );
}
 
export default IvanBlog;