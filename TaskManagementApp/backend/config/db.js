const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

// npm uninstall mongodb mongoose
//npm install mongoose@7 mongodb@6
//npm run dev


// npm run dev -- --host
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
// source ~/.bashrc
//nvm install 20
//[ec2-user@ip-172-31-23-182 frontend]$ node -v
//v20.20.2
//[ec2-user@ip-172-31-23-182 frontend]$ npm install
//npm run dev -- --host
