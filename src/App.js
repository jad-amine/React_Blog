import Navbar from "./Navbar.js";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails.js";

// Used react-router-dom Version 5
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
