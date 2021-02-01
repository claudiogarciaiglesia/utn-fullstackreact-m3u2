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

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
