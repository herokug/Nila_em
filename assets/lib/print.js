/* ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
   ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
   ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
   ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
   ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
   ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                    by jayarathne_technical                                         */

const { M } = require("human-readable");
const terminalImage = require('terminal-image');
const chalk = require('chalk');
const { watchFile } = require('fs');
const PhoneNumber = require('awesome-phonenumber');

let print = console.log;
module.exports = ( m, conn) => {
  
  let _name = m.pushName
  let sender = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') + (_name ? ' ~' + _name : '')
  
try {

  var img
img = /sticker|image/gi.test(m.mtype) ? terminalImage.buffer( m.download()) : false

let filesize = (m.msg ?
  m.msg.vcard ?
  m.msg.vcard.length :
  m.msg.fileLength ?
  m.msg.fileLength.low || m.msg.fileLength :
  m.msg.axolotlSenderKeyDistributionMessage ?
  m.msg.axolotlSenderKeyDistributionMessage.length :
  m.text ?
  m.text.length :
  0
  : m.text ? m.text.length : 0) || 0
  let user = global.db.data.users[m.sender]

  img = /sticker|image/gi.test(m.mtype) ?  terminalImage.buffer( m.download()) : true

  } catch (e) {
console.log(e)
}

if (m.message) {
  console.log(
    chalk.black(chalk.bgWhite("\n[ MESSAGE ]")),
    chalk.black(chalk.bgGreen(new Date())),
    chalk.black(chalk.bgBlue(m.displayText || m.type)) +
      "\n" +
      chalk.magenta("=> From"),
    chalk.green(m.pushName),
    chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
    chalk.green(m.isGroup ? m.groupName : "Private Chat", m.from)
  );
}
};
