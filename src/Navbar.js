import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1> Blog </h1>
            </Link>
            
            <div className="links">
                <Link to="/"> All Blogs </Link>
                <Link to="/ivanblog"> Ivan's Blog </Link>
                <Link to="/create"> 
                    <button className='btn btn-primary'> Create New Blog </button>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;