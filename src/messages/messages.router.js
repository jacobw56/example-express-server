import express from "express";

export const messagesRouter = express.Router();

messagesRouter.get("/hello", (_req, res) => {
    const message = {
        metadata: {
            api: "express-example-server"
        },
        text: "Hello world.",
    };

    res.status(200).json(message);
});