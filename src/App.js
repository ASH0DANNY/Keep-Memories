import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import TodoList from "./component/todolist";
import HomePage from "./component/HomePage";
import SavePassword from "./component/savePassword";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/todo" element={<TodoList />} />
            <Route exact path="/savepassword" element={<SavePassword />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
