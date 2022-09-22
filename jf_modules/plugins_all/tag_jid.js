const nila = require('../../events')
const { generateWAMessageFromContent } = require('@adiwajshing/baileys')

nila.addCommand(
    { pattern: ["tag" , ".t"], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

    try {

   // const group2 = `120363040490785046@g.us`

    const groupMetadata = await conn.groupMetadata(group2).catch((e) => {})
    const participants = await groupMetadata.participants

    console.log(groupMetadata + ' \n' + participants)
    

    /*
    const group2 = `${group}`

    const groupMetadata = ( ((conn.chats[group2] || {}).metadata || await this.groupMetadata(group2).catch(_ => null)) ) || {}
    const participants = ( groupMetadata.participants ) || []

*/

    

    let users = participants.map(a => a.id)

let q = m.quoted ? m.quoted : m
let c = m.quoted ? m.quoted : m.msg
const msg = `${m.conn.text}`

// console.log(m)
await conn.sendMessage(group2, { text : msg , mentions: participants.map(a => a.id) } )
await conn.sendMessage(m.chat, { text : `sucess :-)` }, { quoted: m })

} catch (e) {
    console.error(e)
}


})


