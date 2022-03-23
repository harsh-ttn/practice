import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Form from "./pages/Form";
import UserDetail from "./pages/UserDetail";
import CountProvider from "./contexts/countContext";

function App() {
  return (
    <>
      <CountProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </Router>
      </CountProvider>
    </>
  );
}

export default App;
