import { sequelize_db, UserActivity } from "./db.js";

async function updateTenSecends() {
    let num = 0;
    await UserActivity.sync();


    const names = ['Charlie', 'Dana', 'Eva', 'Frank'];
    const activities = ['Comment', 'Like', 'Share', 'Logout'];

    const a = setInterval(async () => {
        const num1 = return_num();

        const count = await UserActivity.count(); // מוציא כמה שורות מכילה הטבלה
        console.log(count);
        if (count < 50) {
            await UserActivity.create({
                name: names[num1],
                activity: activities[num1]
            });
        } 
        else { // if table number row >50 : create new table
            await UserActivity.sync({ force: true });
        }


        num++;

        if (num >= 5) {
            clearInterval(a);
            const res = await UserActivity.findAll();
            const data = res.map(row => row.toJSON());
            console.log(data);

            await sequelize_db.close();
        }
    }, 1000);
}
function return_num() {
    return Math.floor(Math.random() * 4); //0-3
}

updateTenSecends();