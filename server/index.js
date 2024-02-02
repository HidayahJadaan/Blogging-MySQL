import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cors from 'cors';
import cookieParser from "cookie-parser";


const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', // or the specific origin of your frontend
  credentials: true, // to allow cookies to be included in requests
};
app.use(cors(corsOptions));


app.use(express.json());
// app.use(cors())
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Listening on port 8800...");
});
