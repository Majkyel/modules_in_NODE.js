var os = require('os');
var timeConverter = require('./timeConverter');

function getOSinfo() {
    
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    console.log('System: ' + type);
    console.log('Release: ' + release);
    console.log('CPU model: ' + cpu);
    console.log('Minute-uptime: ' + timeConverter.minute(uptime) + ' minutes');
    console.log('Hours-uptime: ' + timeConverter.hours(uptime) + ' hours');
    console.log('User name: ' + userInfo.username);
    console.log('Home dir: ' + userInfo.homedir);
};

exports.print = getOSinfo;
