var express = require('express');
var app = express();

var report = require('./reoprt');
const reoprt = require('./reoprt');

app.get('/createReport', (req, res) => {
    reoprt.CreateReport();
    res.status(200).send("report creation is in proggres");
});

app.get('/reportStatus', (req, res) => {
    try {
        var status = report.GetReportStatus();
        console.log(status);
        res.status(200).send(status);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.listen(3000, () => {
    console.log('listen on localhost:3000');
})