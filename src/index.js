const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.post("/", async (req, res) => {
    try {
        let resp = await axios(req.body);
        res.json(resp.data);
    } catch (error) {
        if(error.message) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send();
        }
    }
})

app.listen(process.env.PORT || 3000, () => console.log("listening"));