const nila = require('../../events')
const { generateWAMessageFromContent } = require('@adiwajshing/baileys')

nila.addCommand(
    { pattern: ["..." ], desc: `GM`, category: [ "chat", "all" ] ,  },

async (m, conn) => {

    await conn.sendMessage(m.sender , { text : `${m.chat}` } , { quoted:m } )
    


})


