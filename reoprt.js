var schedule = require('node-schedule');

var report = {}

module.exports = {
    CreateReport() {
        console.log("Create report requested");        
        var index = 0;
        var job = schedule.scheduleJob('*/1 * * * * *', () => {              
            report.status = index;
            console.log(report.status);
            index++;
            if (index > 100) {
                schedule.cancelJob(job)
                console.log('job ended');                
            }
        })
    },

    GetReportStatus() {
        console.log("get status requested");
        
        if (!report.status) {
            throw new Error("report not found");
        }
        if (report.status == 0) {
            return { status: report.status, proggres: 'waiting...'}
        }
        if (report.status > 0 && report.status < 100) {
            return { status: report.status, proggres: 'on proggres'}
        }
        else {
            return { status: report.status, proggres: 'completed'}
        }
    }
}