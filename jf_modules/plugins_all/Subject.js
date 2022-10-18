const fs = require('fs')
const nila = require('../../events')


let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']

nila.addCommand({ pattern: ['name','subject','group'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
async (m, conn) => {





await conn.groupUpdateSubject(m.chat, m.text)

})