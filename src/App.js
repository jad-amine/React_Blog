import Navbar from "./Navbar.js";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const array = ["jad", "john", 50];
  var link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar /> {/* we want it to appear above the content */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
