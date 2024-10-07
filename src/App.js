import { Route, Router, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import TodoList from "./component/todolist";
import SavePassword from "./component/savePassword";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" />
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
