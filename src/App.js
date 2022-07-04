import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import IvanBlog from './IvanBlog';
import NotFound from './NotFound';


function App() { 
  return (
    <BrowserRouter>    
      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>

            <Route exact path="react-blog">
              <Home />
            </Route>

            <Route exact path="/react-blog/ivanblog">
              <IvanBlog />
            </Route>

            <Route exact path="/react-blog/create">
              <Create />
            </Route>

            <Route exact path="/react-blog/blogs/:id">
              <BlogDetails />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>     
        </div>
      </div>
    </BrowserRouter>  
  );  
}

export default App;
