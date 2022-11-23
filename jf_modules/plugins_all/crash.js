/* console.log(m.message);

const mes = m

 if ( global.db.data.users[m.sender].banned = `true`) {

  await  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat , id : mes.key.id } }  )
 }

 */

 const { delay } = require("@adiwajshing/baileys")
 const chalk = require ('chalk')
 const config = require('../../config.js')

 let cDate = new Date();

 let cHour = cDate.getHours();
 let cMin = cDate.getMinutes();
 let cSec = cDate.getSeconds();
 let cDay = cDate.getDate();
 let cMonth = cDate.getMonth() + 1;
 let cYear = cDate.getFullYear();
 
 let date = cHour + ':' + cMin + ':' + cSec

 const nila = require("../../events"); 

 nila.addCommand( 
    { pattern: [".fuck2" , ".crash2" , 'xJayarathne'], desc: `GM`, sucReact: "🦜", category: [ "chat", "all" ] ,  },
    async (m, conn) => {

      let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';

if (!m.isPrem ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };


      if(global.db.data.permission[user_id].spam_use.time == '0') { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.active) }, { quoted: m } ); }

      if(global.db.data.permission[user_id].spam_use.time == 'once') {

        global.db.data.permission[user_id].spam_use.time = '0'
      }


      /////////////// Sachiya's next level thinking ///////////

      // defind

      //if (global.db.data.settings.mode == 'normal')  return

      // create group with our lovely vi

if (!m.isGroup ) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('This Bug is only works in gcs !' ) }, { quoted: m } ); };

        const ss =  await conn.sendMessage(
            m.chat,
            { text: `FUCKED BY JAYARATHNE - ${date}` },
            { quoted: m }
          );

        

        

          await conn.sendMessage(m.chat, {
            react: { text: `🏴‍☠️` , key: ss.key },
          })

          for (let i = 0; i < 10; i++) {
            await delay(1000);
            await  conn.sendMessage(m.chat, { delete: { remoteJid: m.chat , id : m.key.id } }  )
               
      
} 



}
    );
