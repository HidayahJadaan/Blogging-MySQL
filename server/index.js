import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
const app = express();

// Define __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure this uploads directory exists in your backend project structure
    cb(null, path.join(__dirname, 'uploads/'));
  },
  filename: function (req, file, cb) {
    // Prepends a timestamp to the original filename to avoid name conflicts
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

// Route for handling file uploads
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  // Respond with the filename in uploads directory
  res.status(200).json(file.filename);
});

// Serve static files from 'uploads' directory
app.use('/upload', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Start the server
app.listen(8800, () => {
  console.log("Backend server is running on port 8800!");
});
