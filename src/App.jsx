import Home from "./Home";
import About from "./About";
import Menubar from "./Menubar";
import Register from "./Register";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/About" element={<PrivateRoute element={<About />} />} />
          <Route path="/Menubar" element={<PrivateRoute element={<Menubar />} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
