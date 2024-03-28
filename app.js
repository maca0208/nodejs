const express = require('exspress');
const bodyParser = require('body-parser');
const analysisController = require('.controllers/analysisController');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/analiza', analysisController.getAnalysis);
app.get('/analiza', analysisController.postAnalysis);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

