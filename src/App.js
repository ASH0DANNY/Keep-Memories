import { Route, Router, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import TodoList from "./component/todolist";
import SavePassword from "./component/savePassword";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
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
