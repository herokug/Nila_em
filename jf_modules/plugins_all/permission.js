const nila = require("../../events");
const { delay } = require('@adiwajshing/baileys');
const chalk = require('chalk');
const config = require('../../config');
 

 nila.addCommand( 
    { pattern: ["request_active" , 'active' ], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {


if(!m.isOwner) return;

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let use = global.db.data.permission[user_id].spam_use

let buttons = [
    {buttonId: `.active_once`, buttonText: {displayText: `ᴀᴄᴛɪᴠᴇ (ᴏɴᴄᴇ)`}, type: 1},
    {buttonId: `.active_alltime`, buttonText: {displayText: `ᴀᴄᴛɪᴠᴇ (ᴀʟʟ ᴛɪᴍᴇ)`}, type: 1},
    {buttonId: `.denie`, buttonText: {displayText: `ᴅᴇɴɪᴇᴅ (ᴀʟʟ ᴛɪᴍᴇ)`}, type: 1},
]

let buttonMessage = {
//image: { url: image },
text: `_ρҽʀɱιʂʂισɳ ɾҽϙυҽʂƚ 🦜 _

! ƚσ αƈƚιʋҽ Ⴆσƚ'ʂ ʂραɱ ρʅυɠιɳʂ

- ᴜꜱᴇʀ : wa.me/${m.sender.split('@')[0]}

- ᴄᴜʀʀᴇɴᴛ ꜱᴛᴀᴛᴜꜱ : ${global.db.data.settings[conn.user.id].mode}

_*ɪɴꜰᴏ - ɪꜰ ʏᴏᴜ ᴄʜᴏᴏꜱᴇ ᴀᴄᴛɪᴠᴇ (ᴏɴᴄᴇ) , ꜱᴘᴀᴍ ᴘʟᴜɢɪɴꜱ ᴏɴʟʏ ᴡᴏʀᴋ ᴏɴᴄᴇ ꜰᴏʀ ᴀɴʏ ᴀᴛᴛᴀᴄᴋ. ᴀʟʟᴏᴡ (ᴀʟʟ ᴛɪᴍᴇ) ɪꜱ ᴀʟʟᴏᴡꜱ ᴜꜱᴇʀ ᴛᴏ ᴜꜱᴇ ꜱᴘᴀᴍ ᴄᴏᴍᴍᴀɴᴅꜱ ᴀɴʏ ᴛɪᴍᴇ ᴀɴᴅ ᴅᴇɴɪᴇᴅ ᴛᴏ ᴅᴇɴɪᴇᴅ ᴛᴏ ᴜꜱᴇ ꜱᴘᴀᴍ ᴘʟᴜɢɪɴꜱ ᴏɴᴄᴇ ᴏʀ ᴀʟʟᴛɪᴍᴇ. _`,

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(m.chat, buttonMessage, { quoted: m })

// // console.log(use)


});

nila.addCommand( 
    { pattern: ["active_alltime" ], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

// if(!m.isOwner) return;
if (!m.isROwner) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };


// // console.log('\n' + global.db.data.settings[conn.user.id].mode)

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let use = global.db.data.permission[user_id].spam_use


  let buttons = [
    {buttonId: `.add16`, buttonText: {displayText: `ᴄʀᴇᴀᴛᴇ ᴀᴛᴛᴀᴄᴋ ɢʀᴏᴜᴘꜱ`}, type: 1},
    {buttonId: `.ping`, buttonText: {displayText: `ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ`}, type: 1},
]

let buttonMessage = {
//image: { url: image },
text: '```Spam Bot activated 🦜 : alltime```',

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(m.chat, buttonMessage, { quoted: m })


  use.time = 'alltime'

 // // console.log(global.db.data.permission[user_id])

});

nila.addCommand( 
    { pattern: ["active_once" ], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

// if(!m.isOwner) return;
if (!m.isROwner) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };


// console.log('\n' + global.db.data.settings[conn.user.id].mode)

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let use = global.db.data.permission[user_id].spam_use
  
  let buttons = [
    {buttonId: `.add16`, buttonText: {displayText: `ᴄʀᴇᴀᴛᴇ ᴀᴛᴛᴀᴄᴋ ɢʀᴏᴜᴘꜱ`}, type: 1},
    {buttonId: `.ping`, buttonText: {displayText: `ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ`}, type: 1},
]

let buttonMessage = {
//image: { url: image },
text: '```Spam Bot activated 🦜 : once```',

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(m.chat, buttonMessage, { quoted: m })


  use.time = 'once'

 // // console.log(global.db.data.permission[user_id])

});

nila.addCommand( 
    { pattern: ["denie" ], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

// if (!m.isROwner) return;
// if(!m.isOwner) return;
if (!m.isROwner) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };

// console.log('\n' + global.db.data.settings[conn.user.id].mode)

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let use = global.db.data.permission[user_id].spam_use

await conn.sendMessage( m.from, { text: nila.infoMessage('User not allowed to use Spam bot') }, { quoted: m } );

  use.time = '0'

 // // console.log(global.db.data.permission[user_id])

});


nila.addCommand( 
  { pattern: ["bug_request" ], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

if(!m.isOwner) return;
// if (!m.isROwner) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };


// // console.log('\n' + global.db.data.settings[conn.user.id].mode)

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let use = global.db.data.permission[user_id].spam_use

let buttons = [
  {buttonId: `.add16`, buttonText: {displayText: `ᴄʀᴇᴀᴛᴇ ᴀᴛᴛᴀᴄᴋ ɢʀᴏᴜᴘꜱ`}, type: 1},
  {buttonId: `.ping`, buttonText: {displayText: `ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ`}, type: 1},
]

let buttonMessage = {
//image: { url: image },
text: `__ρҽɾɱιʂʂισɳ ɾҽϙυҽʂƚ _ 🦜 _

! ƚσ υʂҽ α ʂραɱ ƈσɱɱαɳԃ

- ᴜꜱᴇʀ : wa.me/${m.sender.split('@')[0]}

- ᴄᴏᴍᴍᴀɴᴅ : ⚠️ ${m.conn.text.split('/')[0]}

- ʀᴇᴀꜱᴏɴ : ${m.conn.text.split('/')[1]}

- ᴄᴜʀʀᴇɴᴛ ꜱᴛᴀᴛᴜꜱ : ${global.db.data.settings[conn.user.id].mode}

_*ɪɴꜰᴏ - ɪꜰ ʏᴏᴜ ᴄʜᴏᴏꜱᴇ ᴀʟʟᴏᴡ (ᴏɴᴄᴇ) , ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ᴡᴏʀᴋ ᴏɴᴄᴇ ꜰᴏʀ ᴏɴᴇ ᴀᴛᴛᴀᴄᴋ. ᴀʟʟᴏᴡ (ᴀʟʟ ᴛɪᴍᴇ) ɪꜱ ᴀʟʟᴏᴡꜱ ᴜꜱᴇʀ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴀɴʏ ᴛɪᴍᴇ ᴀɴᴅ ᴅᴇɴɪᴇᴅ ꜰᴏʀ ᴅɪꜱᴀʟʟᴏᴡ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴏɴᴄᴇ ᴏʀ ᴀʟʟᴛɪᴍᴇ. _`,

          footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
          buttons: buttons,
          headerType: 4
      }



conn.sendMessage(m.chat, buttonMessage, { quoted: m })


    })