import Navbar from "./Navbar.js";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./Create.js";

// Used react-router-dom Version 5
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
