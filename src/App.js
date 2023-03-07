import "./App.css";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import RouterURL from "./router/RouterURL";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexHome from "./component/page/Home/IndexHome";
import IndexShop from "./component/page/Shop/IndexShop";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterURL />
      <Footer />
    </div>
  );
}

export default App;
