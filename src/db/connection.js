const mongoose = require("mongoose");
(async function () {
    try {
        await mongoose.connect("mongodb+srv://suryask7549_db_user:8RGwCzZjsrimhlV3@cluster0.0ddhoqt.mongodb.net/DailyRoutineTracker?appName=Cluster0");
        console.log("Connection Success");
    } catch (error) {
        console.log("Connection Failed", error);
    }
})();

