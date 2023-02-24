
import { useState } from "react";
import "./App.css";
import Containtcontainer from "./Containtcontainer";
import Header from "./Header";




function App() {
  
const [dark , darkTheme] = useState(false);
  return (
    <div className="App">
      <Header dark={dark} darkTheme={darkTheme}/>
      <Containtcontainer dark={dark}/>
    </div>
  );
}

export default App;
