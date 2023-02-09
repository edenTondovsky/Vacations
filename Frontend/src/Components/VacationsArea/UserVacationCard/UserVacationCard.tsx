import VacationModel from "../../../Models/vacation-model";
import "./UserVacationCard.css";

interface UserVacationCardProps {
    vacation: VacationModel;
}

function UserVacationCard(props: UserVacationCardProps): JSX.Element {
    return (
        <div className="UserVacationCard Box">

            <>
                Destination: {props.vacation.destination}
                <br />
                Description: {props.vacation.description}
                <br />
                Start Date: {props.vacation.startDate}
                <br />
                End Date: {props.vacation.endDate}
                <br />
                Price: {props.vacation.price}
                <br />
                image: {props.vacation.image}
            </>
            
        </div>
    );
}

export default UserVacationCard;
