import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../authArea/Login/Login";
import Register from "../../authArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import UserVacationsList from "../../VacationsArea/UserVacationsList/UserVacationsList";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user/vacations" element={<UserVacationsList />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
