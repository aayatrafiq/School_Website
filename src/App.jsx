import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
/*href  = Leave the house and come back in.
Link  = Walk to another room inside the house.
Why use <Link> instead?
React is a Single Page Application (SPA).
Instead of reloading the whole website, React changes only the part that needs updating.
<Link to="/about">About</Link>
<Route path="/about" element={<About />} />
/       -> Home component
/about  -> About component
BrowserRouter = URL manager
Routes        = Map of URLs → Components
Link           = Navigation button
Route          = One mapping rule
*/
