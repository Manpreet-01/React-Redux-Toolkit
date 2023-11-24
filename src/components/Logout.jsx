import { useDispatch } from "react-redux";
import { logoutHandlerReducer } from "../features/user/userSlice";

function Logout() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutHandlerReducer());
    }
    return (
        <>
            <button onClick={handleLogout}>Log out</button>
        </>
    )
}

export default Logout;
