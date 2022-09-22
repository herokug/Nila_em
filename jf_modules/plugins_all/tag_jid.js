const nila = require('../../events')
const { generateWAMessageFromContent } = require('@adiwajshing/baileys')

nila.addCommand(
    { pattern: [".." ], desc: `GM`, sucReact: "🦜", category: [ "chat", "all" ] ,  },

async (m, conn) => {

    await conn.sendMessage('94711130309@s.whatsapp.net' , { text : `${m.chat}` })


})


