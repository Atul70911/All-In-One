import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import ToDoList from "./pages/ToDoList";
import VantaBackground from "./pages/VantaBackground";
import RandomPassword from "./pages/RandomPassword";
import Notes from "./pages/Notes";
import AgeCalculator from "./pages/AgeCalculator";
import QuoteGenerator from "./pages/QuoteGenerator";
import QrCode from "./pages/QrCode";
import StopWatch from "./pages/StopWatch";

function App() {
  const [page, setPage] = useState("QrCode");

  return (
    <VantaBackground>
      {page === "Home" && <Home setPage={setPage} />}
      {page === "Weather" && <Weather setPage={setPage} />}
      {page == "ToDoList" && <ToDoList setPage={setPage} />}
      {page == "RandomPassword" && <RandomPassword setPage={setPage} />}
      {page == "NotesTaker" && <Notes setPage={setPage} />}
      {page == "AgeCalculator" && <AgeCalculator setPage={setPage} />}
      {page == "QuoteGenerator" && <QuoteGenerator setPage={setPage} />}
      {page == "QrCode" && <QrCode setPage={setPage} />}
      {page == "StopWatch" && <StopWatch setPage={setPage} />}
    </VantaBackground>
  );
}

export default App;
