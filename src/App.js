import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import Login from "./components/Login";
import Mese from "./components/Mese";
import TopBar from "./components/TopBar";
import { toggleModal } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          {/* <button onClick={() => dispatch(toggleModal())}>export toggl</button>
          <TopBar />
          <Mese /> */}
          <Catalog />
        </>
      )}
    </>
  );
}

export default App;
