const fs = require('fs')
const nila = require('../../events')


let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']

nila.addCommand({ pattern: ['s','sticker','stick'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
async (m, conn) => {







let media = await m.quoted.download()
let encmedia = conn.sendMessage(m.chat, { sticker: { url: media } }, { quoted: m })
await fs.unlinkSync(encmedia)



})