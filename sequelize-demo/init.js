import { sequelize_db, UserActivity } from "./db.js";

export async function DbInit() {
    try {

        // בדיקה אם ה DB קיים - אפשר לתת הגבלות בנוסף אם רוצים

        // await sequelize_db.authenticate()
        //     .then(() => {
        //         console.log('connect to DB');
        //     })
        //     .catch(Err => {
        //         console.log('DataBase is not found');
        //     });

        // userActivity.sync(); //יוצר חדש במידה ולא קיים - במידה וקיים - לא נוגע
        // userActivity.sync({force:true}); //יוצר טבלה חדשה - גם אם יש אחרת תחתיה - הוא מוחק אותה

        await UserActivity.sync({ force: true });
        console.log('tables Created');

        // create table
        await UserActivity.create({
            name: "asi",
            activity: "gog"
        });

        // אופציה להכניס כמה ביחד 
        const initialData = [
            { name: 'Alice', activity: 'Login' },
            { name: 'Bob', activity: 'Upload Photo' },
        ];
        await UserActivity.bulkCreate(initialData); // ההכנסה אל ה- DB
        console.log('Initial data inserted');

    }
    catch (Err) {
        console.log('Error inserting data:', Err);
    }
    finally {
        await sequelize_db.close();
    }

}

// קובץ זה בעצם יוצר את הטבלאות על בסיס הדאטה בייס
await DbInit();







