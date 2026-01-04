// import "dotenv/config";
// import express from "express";
// import cors from "cors";

// import { connectDB } from "./db.js";


// let dbConnected = false;

// async function initializeDB() {
//   if (!dbConnected) {
//     try {
//       await connectDB();
//       dbConnected = true;
//       console.log("Database initialized");
//     } catch (error) {
//       console.error("Failed to connect to database:", error);
//     }
//   }
// }

// export function createServer() {
//   const app = express();

//   // Middleware
//   app.use(cors());
//   app.use(express.json());


//   // Initialize database on startup
//   initializeDB();

  // // Example API routes
  // app.get("/api/ping", (_req, res) => {
  //   const ping = process.env.PING_MESSAGE ?? "ping";
  //   res.json({ message: ping });
  // });

//   app.get("/api/demo", handleDemo);

 

//   // Health check endpoint
//   app.get("/api/health", (req, res) => {
//     res.json({
//       status: "ok",
//       dbConnected,
//       timestamp: new Date().toISOString(),
//     });
//   });

//   return app;
// }
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./db.js";
// import { handleDemo } from "./routes/demo.js";

// import citizenAuthRoutes from "./routes/citizenAuthRoutes.js";
// import councillorAuthRoutes from "./routes/councillorAuthRoutes.js";
// import complaintRoutes from "./routes/complaintRoutes.js";
// import { authenticateUser } from "./middleware/authMiddleware.js";

// dotenv.config();

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
// app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

// // DB
// connectDB();

// // Routes
// app.get("/api/demo", handleDemo);
//  // Citizen authentication routes
//   app.use("/api/citizen", citizenAuthRoutes);

//   // Councillor authentication routes
//   app.use("/api/councillor", councillorAuthRoutes);

//   // Complaint routes (requires authentication)
//   app.use("/api/complaints", authenticateUser, complaintRoutes);
// app.use("/uploads", express.static("uploads"));

// // Health check
// app.get("/", (_req, res) => {
//   res.send("✅ Fix My Ward Backend Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Backend running on http://localhost:${PORT}`);
// });
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

import citizenAuthRoutes from "./routes/citizenAuthRoutes.js";
import councillorAuthRoutes from "./routes/councillorAuthRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB
connectDB();

// Routes
app.use("/api/citizen", citizenAuthRoutes);
app.use("/api/councillor", councillorAuthRoutes);
app.use("/api/complaints", authenticateUser, complaintRoutes);
app.use("/uploads", express.static("uploads"));

// Health
app.get("/", (_req, res) => {
  res.send("✅ Fix My Ward Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});


