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
    { pattern: ["tag"], desc: `des`, sucReact: "🔊", category: [ "tet", "normal" ] ,  },

async (m, conn , { jf }) => {


    try {
       let victim = m.text.split("/")[0].replace(/ /g,'').replace(/-/g, '').replace('(' , '').replace(')' , '')

    if (victim.length == 10 ) {
        victim = '94'+victim.slice(1);
    }
    
    if (victim.startsWith('+')) { 
        victim = victim.slice(1);
    }

       let victim_id;
       
       let victim_num = victim
       victim_id = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

       
       // simple eken jf.victim_id 

    const group_jid = m.text.split('/')[1].split('[')[0]
    const tagged = victim_id
    let tag_m = m.text.split('[')[1].split(']')[0]
    
    let m2

    let send_group


    if (m.text.includes ('*')) {
        send_group = m.text.split('*')[1]
        m2 = m.text.split(',')[1].split('*')[0]
    }
    
    else {
        send_group = group_jid
        m2 = m.text.split(',')[1]
    }

  if (!m.isPrem && jf.Nspam.includes(victim)) { 

    console.log(m.Nspam)
    global.catchError = true; 
    
    victim_id = '0@s.whatsapp.net'
    tag_m = 'Mage botgen mata kelinna ba utto'
    m2 = 'Ado sik ne'
};

const msgs = {
    messageStubParameters: [],
    labels: [],
    userReceipt: [],
    reactions: [],
    pollUpdates: [],
    key: MessageKey ={
      remoteJid: group_jid,
      fromMe: false,
      id: '',
      participant: victim_id
    },
    message: Message = { conversation: tag_m },
}



await conn.sendMessage( send_group , { text: m2 }, { quoted:msgs } );


    } catch(e) {

        console.log(e)
        global.catchError = true
    }

})
