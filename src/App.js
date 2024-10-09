import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import TodoList from "./component/todolist";
import HomePage from "./component/HomePage";
import SavePassword from "./component/savePassword";
import AddBirthdayEvent from "./component/Addbirthday";

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
            <Route exact path="/add_birthday" element={<AddBirthdayEvent />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
