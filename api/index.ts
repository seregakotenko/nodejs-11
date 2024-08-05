import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const pets = [{title: 'capybaras'}, {title: 'wolves'}];

app.get("/", (req: express.Request, res: express.Response) => {
    let hello = 'Hello World!';

    res.send(hello);
});

app.get("/pets", (req: express.Request, res: express.Response) => {
    res.send(pets);
});

app.get("/pets/:petsTitle", (req: express.Request, res: express.Response) => {
    let pet = pets.find(p => p.title === req.params.petsTitle);

    if (pet) {
        res.send(pet);
    } else {
        res.status(404).send('Pet Is Not Found');
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;