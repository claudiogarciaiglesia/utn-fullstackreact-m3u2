var express = require("express");
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/form', (req, res) => {
    let labels = ['Name', 'Last Name', 'Age', 'Cellphone', 'Birth Country', 'Resindence Country'];
    let formDataArray = Object.entries(req.body);
    let htmlResponse = '<head><link rel="stylesheet" href="style.css"></head><body>';
    labels.forEach((label, index) => {
        htmlResponse = htmlResponse.concat('', `<p>${label}: <strong>${formDataArray[index][1]}</strong></p>`);
    });
    htmlResponse = htmlResponse.concat('<br>', `<a href="/">Go back to registration page</a></body>`)
    res.send(htmlResponse);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
