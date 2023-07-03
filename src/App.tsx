import { HashRouter as Router } from "react-router-dom";
import MyRouter from "./components/MyRouter";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <div className="py-4 shadow-lg text-center bg-[#23252E] text-5xl text-white font-bold">
        UnTorcher
      </div>
      <Router>
        <MyRouter />
      </Router>
    </div>
  );
}

export default App;
