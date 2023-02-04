import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import imageHandler from "../2-utils/image-handler";
import UserModel from "../4-models/user-model";
import VacationModel from "../4-models/vacation-model";

async function getAllVacationsForUser(user: UserModel): Promise<VacationModel[]> {
   
    const sql = `
    SELECT DISTINCT 
    V.*,
    EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
    COUNT(F.userId) AS followersCount
FROM vacations AS V LEFT JOIN followers AS F
ON V.vacationId = F.vacationId
GROUP BY vacationId
ORDER BY startDate
    `;
    const vacations = await dal.execute(sql, user.userId);
    return vacations;
}

async function follow(userId: number, vacationId: number): Promise<void> {
    const sql = `INSERT INTO followers VALUES(?, ?)`;
    await dal.execute(sql, userId, vacationId);
}

async function unfollow(userId: number, vacationId: number): Promise<void> {
    const sql = `DELETE FROM followers WHERE userId = ? AND vacationID = ?`;
    await dal.execute(sql, userId, vacationId);
}

export default {
    getAllVacationsForUser,
    follow,
    unfollow

}