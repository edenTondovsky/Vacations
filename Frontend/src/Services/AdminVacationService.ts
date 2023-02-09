import axios from "axios";
import VacationModel from "../Models/vacation-model";
import { vacationsActionType, vacationStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

class AdminVacationService {

    public async getAllVacations(): Promise<VacationModel[]> {
        let vacations = vacationStore.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.AdminVacationsUrl);
            vacations = response.data;
            vacationStore.dispatch({ type: vacationsActionType.FetchVacations, payload: vacations })
        }
        return vacations
    }




}

const adminVacationService = new AdminVacationService();

export default adminVacationService;