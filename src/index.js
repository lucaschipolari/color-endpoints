import app from "./app.js";
import { connectDb } from "./database/database.js";

const PORT = process.env.PORT || 3000;

connectDb();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
