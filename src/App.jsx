import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Sidebar from "./Components/sidebar";
import ToDoList from "./Components/ToDoList/todolist";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ToDoList />
      <Footer />
    </>
  );
}

export default App;
