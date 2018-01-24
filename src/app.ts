import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as path from "path";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

// test route
app.get("/", (req, res) => {
	res.write("Working!!");
});


export { app }
