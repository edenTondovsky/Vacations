import { useEffect, useState } from "react";
import VacationModel from "../../../Models/vacation-model";
import userVacationService from "../../../Services/UserVacationService copy";
import notify from "../../../Utils/Notify";
import UserVacationCard from "../UserVacationCard/UserVacationCard";
import "./UserVacationsList.css";

function UserVacationsList(): JSX.Element {

    const [vacations, setVacations] = useState<VacationModel[]>([]);

    useEffect(()=>{
        userVacationService.getAllVacations()
        .then(vacations => setVacations(vacations))
        .catch(err => notify.error(err));
    },[])


    return (
        <div className="UserVacationsList">

        {vacations.map(v=> <UserVacationCard key={v.vacationId} vacation={v}  />)}

        </div>

    );
}

export default UserVacationsList;
