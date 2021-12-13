const app = require("express")();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.post("/", async (req, res) => {
    try {
        res.json(await (await axios(req.body)).json());
    } catch (error) {
        if(error.message) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send();
        }
    }
})

app.listen(process.env.PORT);