import{BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path = "/movie/:id" element={<Detail />} />

    </Routes>
  </Router>);
}
export default App;
