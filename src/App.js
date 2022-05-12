import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/car/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/> 
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/modelS"  element={<About
           title="Model S"
           descripition="Plaid"
           backgroundImg="model-s.jpg"
           miH="396 mi"
           miP="Range (EPA eat.)"
           mphH="1.99 s"
           mphP="0-60.mph*"
           milH="200 mph"
           milP="Top Speed"
           hpH="1,020 hp"
           hpP="Peak Power"
           rightBtnText="order now"
          />}/>
          <Route path="/model3" element={<About
           title="Model 3"
           descripition=""
           backgroundImg="model-3-2.jpg"
           
           mphH="Custom order"
           mphP="0-60 mph*"
           milH="358 mi"
           milP="Range (EPA est.)"
           hpH="AWD"
           hpP="Dual Motor"
           rightBtnText="order now"
          />}/>
          <Route path="/modelX" element={<About
           title="Model X"
           descripition="Plaid"
           backgroundImg="model-X-2.jpg"
           miH="333 mi"
           miP="Range (EPA est.)"
           mphH="2.5 s"
           mphP="0-60 mph*"
           milH="9.9 s"
           milP="1/4 Mile"
           hpH="1,020 hp"
           hpP="Peak Power"
           rightBtnText="order now"
          />}/>
          <Route path="/modelY" element={<About
           title="Model Y"
           descripition=""
           backgroundImg="model-y-2.jpg"
           miH="76 cu ft"
           miP="Cargo Space"
           mphH="330 mi"
           mphP="Range (EPA est.)"
           milH="AWD"
           milP="Dual Motor"
           
           rightBtnText="order now"
          />}/>

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
