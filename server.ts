import * as express from 'express';
import {Application} from 'express';
import {router} from "./routes/init-auth-routes";
import {passPortSetup} from "./config/passport-setup";

const app: Application = express();

app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/public'))

//home page route

//initAuthRoutes(app);

//setup Passport
passPortSetup();

app.use('/auth', router);

app.get('/', (req, res)=> {
    res.render("home");
    //res.send('200');
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})