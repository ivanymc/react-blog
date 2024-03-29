import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import IvanBlog from './IvanBlog';
import NotFound from './NotFound';


function App() { 
  return (
    <BrowserRouter basename={ "/react-blog" }>    
      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/ivanblog">
              <IvanBlog />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:_id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>     
        </div>
      </div>
    </BrowserRouter>  
  );  
}

export default App;
