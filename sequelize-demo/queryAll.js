import { sequelize_db, UserActivity } from "./db.js";

export async function findAllData() {
    
    const res = await UserActivity.findAll({raw: true});
    console.table(res);
    await sequelize_db.close();

    // const data = res.map(row => row.toJSON());
    // console.log(data);
    // console.log(res);
    // await sequelize_db.close();
}
findAllData();
