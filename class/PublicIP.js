// const ip = require('public-ip')
const {send} = require('../helpers/email')
'use strict';
 
const {promisify} = require('util'); //<-- Require promisify
const getIP = promisify(require('external-ip')()); // <-- And then wrap the library
 
class PublicIp{
    construct(){
        this.currIp = ""
    }
    async check() {
        const newIp = await getIP()
        console.log(`\t- current ip ${this.currIp} | new ip ${newIp}`)
        if(newIp===this.currIp){
            console.log('\t- IP not changed!')
        }else{
            console.log('\t- IP changed')
            console.log('\t- Set current ip to new ip')
            this.currIp = newIp
            send(newIp)
            console.log(`\t- current ip ${this.currIp}`)
        }
    }

}
module.exports = PublicIp