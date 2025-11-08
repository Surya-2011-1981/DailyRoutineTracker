const mongoose = require("mongoose");
(async function () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Success");
    } catch (error) {
        console.log("Connection Failed", error);
    }
})();

