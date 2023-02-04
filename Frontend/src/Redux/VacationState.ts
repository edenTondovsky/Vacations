
import VacationModel from "../Models/vacation-model";

//1.App state
export class VacationState {
    public vacations: VacationModel[] = [];
}

//2. Action type
export enum vacationsActionType {
    FetchVacations = "FetchVacations",
    AddVacation = "AddVacation",
    UpdateVacation = "UpdateVacation",
    DeleteVacation = "DeleteVacation",
}

//3. Action - a single describing single operation on data:
export interface vacationsAction {
    type: vacationsActionType,
    payload: any;
}

//4.Reducer - function preforming the needed actions:
export function vacationsReducer(currentState = new VacationState(), action: vacationsAction): VacationState {

    const newState = { ...currentState };

    switch (action.type) {
        case vacationsActionType.FetchVacations:
            newState.vacations.push(action.payload);
            break;
        case vacationsActionType.AddVacation:
            newState.vacations.push(action.payload);
            break;

        case vacationsActionType.UpdateVacation:
            const indexToUpdate = newState.vacations.findIndex(v => v.vacationId === action.payload.vacationId);
            if (indexToUpdate >= 0) {
                newState.vacations[indexToUpdate] = action.payload;
            }
            break;

        case vacationsActionType.DeleteVacation:
            const indexToDelete = newState.vacations.findIndex(v => v.vacationId === action.payload);
            if(indexToDelete >=0){
                newState.vacations.splice(indexToDelete ,1)
            }
            break;
    }
}
