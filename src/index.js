import express from "express";
import { messagesRouter } from "./messages/messages.router.js";

const PORT = 3000;

const app = express();
const apiRouter = express.Router();

app.use("/api", apiRouter);
apiRouter.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});