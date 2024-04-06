import "./App.css";
import UpperBracket from "./components/upper/UpperBracket";
import SetPlayers from "./components/SetPlayers";
import LowerBracket from "./components/lower/LowerBracket";
import { useSelector } from "react-redux";
function App() {
  const players = useSelector((state) => state.allPlayers);
  return (
    <>
      <SetPlayers />
      <UpperBracket />
      <LowerBracket />
    </>
  );
}

export default App;
