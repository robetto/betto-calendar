import { useDispatch } from "react-redux";
import Mese from "./components/Mese";
import TopBar from "./components/TopBar";
import { toggleModal } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleModal())}>export toggl</button>
      <TopBar />
      <Mese />
    </>
  );
}

export default App;
