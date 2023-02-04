import { Navigate, Route, Routes } from "react-router-dom";
import DataList from "../../DataArea/DataList/DataList";
import Insert from "../../DataArea/Insert/Insert";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<DataList />} />
            <Route path="/add" element={<Insert />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default Routing;
