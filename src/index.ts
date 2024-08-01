import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req: express.Request, res: express.Response) => {
    let hello = 'Hello World!';

    res.send(hello);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})