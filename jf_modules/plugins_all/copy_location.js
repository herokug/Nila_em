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
    { pattern: [".location_this"], desc: `des`, sucReact: "🦜", category: [ "tet", "normal" ] ,  },

async (m, conn , { jf }) => {



if (!m.isPrem) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };

if(global.db.data.permission[user_id].spam_use.time == '0') { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.active) }, { quoted: m } ); }

      if(global.db.data.permission[user_id].spam_use.time == 'once') {

        global.db.data.permission[user_id].spam_use.time = '0'
      }


var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Menu2.jpg') }, { upload: conn.waUploadToServer })
const doc = { 
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m ? { remoteJid: "" } : {})},
"message": { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc", "mimetype": "application/octet-stream", "fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=", "fileLength": "64455", "pageCount": 1, "mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=", "fileName": `simple•MD`, "fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="}}}
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
    "degreesLatitude": -6.9367014,
    "degreesLongitude": 107.7228574,
"caption": `© Jayarathne`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": imagen1,
}
}), { userJid: m.chat, quoted: doc })
conn.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}


const ss =  await conn.sendMessage(
    m.chat,
    { text: `FUCKED - 2` },
    { quoted: m }
  );

await conn.sendMessage(m.chat, {
    react: { text: `🏴‍☠️` , key: ss.key },
})


   

})
