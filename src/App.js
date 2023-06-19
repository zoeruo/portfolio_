// import logo from './logo.svg';
// import './App.css';
// // import NavBAR from './components/Navbar/index';
// import { NavBar } from './components/NavBar';
// import { Banner } from './components/Banner';
// // import { BrowserRouter as Router, Routes, Route }
// //     from 'react-router-dom';
// // import About from './pages/About';
// import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />

//     </div>

//   );
// }

// export default App;

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RedFlagsOut from "./pages/RedFlagsOut";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="RedFlagsOut" element={<RedFlagsOut />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
