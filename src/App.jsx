import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Login from "./Login";
import { AuthProvider, useAuth } from "./Authcontext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/About" element={<PrivateRoute element={<About />} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const _sessionStorage = sessionStorage.getItem("authToken") ? true : false;
  return isAuthenticated || _sessionStorage ? (
    element
  ) : (
    <Navigate to="/Login" />
  );
};

export default App;

