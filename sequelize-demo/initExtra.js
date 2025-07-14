
import { sequelize_db } from "./db.js";
import { Post, User } from "./db_extra.js";

// sequelize_db.random()// מחזיר לי ערך רנדומלי - קטע 

// try {
//     await Post.sync();
//     await User.sync();

//     Post.create({
//         title: "shaul",
//         content: "asdfghjkl"
//     })

//     User.create({
//         name: 'shaul',
//         email: 'shshshsh@Z#@eh3riuyegfr',
//     })
//     const resPost = await Post.findAll({ raw: true });
//     console.table(resPost);
//     const dataPost = await resPost.id;
//     console.log(dataPost);
//     const resUser = await User.findAll({ raw: true });
//     console.table(resUser);

//     User.hasMany(Post);
//     console.table(resPost);

//     Post.belongsTo(User);


// } catch (Err) {
//     console.log('Err', Err);
// }


async function a() {
    // הגדרת קשרים
    User.hasMany(Post); //Post- n:1 - User - נראה לי - הרבה פוסטים משויכים אל User אחד
    Post.belongsTo(User);

    try {
        // await sequelize_db.sync({ force: true }); // מסנכרן הכל מחדש
        await sequelize_db.sync();

        // יצירת משתמש ופוסט עם קשר
        const user = await User.create({
            name: 'shaul',
            email: 'shshshsh@Z#@eh3riuyegfr',
        });

        await Post.create({
            title: "shaul",
            content: "asdfghjkl",
            UserId: user.id // שם השדה שנוצר אוטומטית ע"י Sequelize
        });
        // שליפת כל הפוסטים עם המשתמשים שלהם (JOIN)
        const postsWithUser = await Post.findAll({
            include: [{ model: User }]
        });
        console.log("Posts with User:");
        console.dir(postsWithUser.map(p => p.toJSON()), { depth: null });

        // שליפת כל המשתמשים עם הפוסטים שלהם (JOIN)
        const usersWithPosts = await User.findAll({
            include: [{ model: Post }]
        });
        console.log("Users with Posts:");
        console.dir(usersWithPosts.map(u => u.toJSON()), { depth: null });
        //מה עושה console.dir

    } catch (Err) {
        console.log('Err', Err);
    }
}
// a();

//extra 2
export async function createExercise() {
    try {

        const obj2User = [
            { name: "fghjkl", email: "dfgbhnmnbghyujk@dfgv" },
            { name: "bhjkmdj", email: "hgvdjhe@ecjdnjv" },
            { name: 'jkjfoejedj', email: `bhjk,mn@JKihgvubhj` }
        ]
        User.bulkCreate(obj2User);

        const obj1Post = [
            { title: "consenens", content: "the function is .. ", UserId: 1 },
            { title: "anan", content: "beyutiful", UserId: 1 },
            { title: "lkjhgfd", content: "xcvbnm,.  ", UserId: 1 }
        ]
        Post.bulkCreate(obj1Post);


    } catch (Err) {
        console.log('Error the function createExercise', Err);
    }
}
// createExercise();

// extra 3
// מטרה: להכיר את findAll,find one, findByPk
export async function findSearch() {
    //שלוף את כל המשתמשים 
    const all = await Post.findAll({raw:true})

    // שלוף משתמש לפי ID
    const byId = await Post.findByPk(4); //עובד
    console.log(byId);

    // שלוף מתמש לפי כותרת 
    const byPoint = await Post.findOne(); // מדפיס את הראשון-id = 1
    console.log(byPoint);
}
// findSearch()

//extra 4

// תרגיל 4 – קשרים והבאת נתונים עם include
// מטרה: להכיר include (JOIN פנימי)

