const fs = require('fs')
const nila = require('../../events')


let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']

nila.addCommand({ pattern: ['s','jayarathne','menu'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
async (m, conn) => {


let buttons = [
    {buttonId: `.join (help_group)`, buttonText: {displayText: `Bot Status` }, type: 1},
    {buttonId: `.restart`, buttonText: {displayText: `buutoun`}, type: 1},
]

let image = './assets/Media/pakaya.png'

let buttonMessage = {
image: { url: image },
caption: `menu`,

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(m.chat, buttonMessage, { quoted: m })




})