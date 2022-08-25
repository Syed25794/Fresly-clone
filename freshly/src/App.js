import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Login from "./Pages/Authentication/Login";
// import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      {/* <HomePage/> */}
      <Footer/>
    </div>
  );
}

export default App;
