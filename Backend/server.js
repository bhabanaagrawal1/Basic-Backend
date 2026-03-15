require('dotenv').config();
const app = require('./src/app')
const connectDB = require('./src/db/db')
const PORT = 3000

const startServer = async () => {
  try {
    await connectDB()

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })

  } catch (error) {
    console.log("DB connection failed:", error)
  }
}

startServer();

