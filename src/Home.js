import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch("https://node-blog-m1eg.onrender.com/reactBlogs");

    return (
        <div className="home">

            { error && <div> { error } </div>}
            { isLoading && <div> Loading... </div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs" /> }
        </div>
     );
}
 
export default Home;

