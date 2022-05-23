import { useDispatch } from "react-redux";
import TopBar from "./components/TopBar";
import { toggleModal } from "./redux/userSlice";

function App() {

const dispatch = useDispatch()

  return (
    <>
      <button onClick={ () => dispatch(toggleModal())}>export toggl</button>
      <TopBar /> 
    </>
  );
}

export default App;
