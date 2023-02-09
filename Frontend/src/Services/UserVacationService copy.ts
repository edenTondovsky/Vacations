import axios from "axios";
import UserModel from "../Models/user-model";
import VacationModel from "../Models/vacation-model";
import { vacationsActionType, vacationStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

class UserVacationService {

    public async getAllVacations(): Promise<VacationModel[]> {
        
        let vacations = vacationStore.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.UserVacationsUrl);
            vacations = response.data;
            vacationStore.dispatch({ type: vacationsActionType.FetchVacations, payload: vacations })
        }
        return vacations
    }




}

const userVacationService = new UserVacationService();

export default userVacationService;