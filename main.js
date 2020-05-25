const publicIP = new( require('./class/PublicIP') )()
const dateFormat = require('dateformat');
const cron = require('node-cron');


// (async () => {
//     await publicIP.check()
// })();

async function run(){
    const currDateTime = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
    console.log(`${currDateTime}`)
    await publicIP.check()
}
run()
cron.schedule('*/1 * * * *', function() {
    run()
});