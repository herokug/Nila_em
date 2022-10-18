const nila = require("../../events");
const config = require('../../config')
//const lang = nila.getString("github");
const axios = require("axios");
const fs = require('fs')
const { youtubeSearch } = require('@bochilteam/scraper');
const speed = require('performance-now')
const { clockString } = require('../../assets/lib/myfunc')
const { yta , ytv } = require('../../assets/lib/y2mate')

// if(!m.text) return await conn.sendMessage( m.from, { text: config.reply.owner }, { quoted: m } );

let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']


nila.addCommand({ pattern: ['yt','play','ytplay' , 'song'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
  async (m, conn) => {

    const timestampe = speed();
    const latensie = speed() - timestampe

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']
    var emoji = emojis[Math.floor(Math.random() * emojis.length)]

    // console.log(m.conn.text)
    if(!m.conn.text) return await conn.sendMessage( m.from, { text: config.reply.owner }, { quoted: m } );

    try {
        var svid = m.text.replace("shorts/","watch?v=")
        var s2vid = svid.replace("?feature=share","")

        let vid = (await youtubeSearch(s2vid)).video[0]

        if (!vid) throw 'e'

        let { title, description, thumbnail, videoId, durationH, viewH, publishedTime , authorName } = vid

        let url = 'https://www.youtube.com/watch?v=' + videoId

        let buttons = [
            {buttonId: `.ytsongzl ${url}`, buttonText: {displayText: 'ᴀᴜᴅɪᴏ'}, type: 1},
            {buttonId: `.ytvideoszl ${url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ'}, type: 1},
            {buttonId: `.doctsl ${url}`, buttonText: {displayText: 'ᴅᴏᴄᴜᴍᴇɴᴛ'}, type: 1}
        ]

        let buttonMessage = {
        image: { url: thumbnail },
        caption: `×── *${title}* ──×

 ➢ ᴅᴜʀᴀᴛɪᴏɴ : ${durationH}
 ➢ ᴄʜᴀɴɴᴇʟ : ${authorName}
 ➢ ᴜᴘʟᴏᴀᴅᴇᴅ : ${publishedTime}
 ➢ ᴠɪᴇᴡꜱ :  ${viewH}
      
  ©ᴘʀᴏᴊᴇᴄᴛ_ɴɪʟᴀ

×───ꜱᴇʟᴇᴄᴛ ꜰɪʟᴇ ᴛʏᴘᴇ───×`,

                                footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${latensie.toFixed(4)} ms\nʀᴜɴᴛɪᴍᴇ - ${uptime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
                                buttons: buttons,
                                headerType: 2
                            }

                            const yt = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })

                            conn.sendReact(m.from, `🫠`, yt.key);

    } catch (e) {
        await conn.sendMessage( m.from, { text: `cant download this` }, { quoted: m } );
    }

    
  });

  nila.addCommand({ pattern: ['ytsongzl'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
  async (m, conn) => {

    const timestampe = speed();
    const latensie = speed() - timestampe

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']
    var emoji = emojis[Math.floor(Math.random() * emojis.length)]

    /// console.log(m.conn.text)
    if(!m.conn.text) return await conn.sendMessage( m.from, { text: config.reply.owner }, { quoted: m } );

    try {

        let media = await yta (m.conn.text, '128kbps')
        let media2 = Math.floor((2.5 * media.filesize) / 1000)

                let buttons = [
                        {buttonId: `.ytmp3zl ${m.text} 320kbps`, buttonText: {displayText: `Not Available... [${media2} MB]`}, type: 1},
                        {buttonId: `.ytmp3zl ${m.text} 128kbps`, buttonText: {displayText: `Not Available... [${media.filesizeF}]`}, type: 1},
                        
                    ]

                    let buttonMessage = {

                        //  image: { url : url },
                          
                          text :  `▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸
*ꜱᴇʟᴇᴄᴛ ᴀᴜᴅɪᴏ Qᴜᴀʟʟɪᴛʏ ,
◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂`,
                          
                      footer: `ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
                   buttons: buttons,
                      headerType: 2
                                     
                       }
                            const yt = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })

                            conn.sendReact(m.from, `🫠`, yt.key);

    } catch (e) {
        console.log(e)
        await conn.sendMessage( m.from, { text: `${e}` }, { quoted: m } );
    }

    
  });

  nila.addCommand({ pattern: ['ytvideoszl'], usage: 'downloadaer', sucReact: `${emojis[Math.floor(Math.random() * emojis.length)]}` , category: ["search", "all"] },
  async (m, conn) => {

    const timestampe = speed();
    const latensie = speed() - timestampe

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let emojis = ['🙂','😏','🤨','🙃','😶‍🌫','🧐','🫠', '😉','🥲' , '😳']
    var emoji = emojis[Math.floor(Math.random() * emojis.length)]

    /// console.log(m.conn.text)
    if(!m.conn.text) return await conn.sendMessage( m.from, { text: config.reply.owner }, { quoted: m } );

    try {

    let media = await ytv(m.conn.text, '360p')
    let media2 = await ytv(m.conn.text, '720p')
    let media3 = await ytv(m.conn.text, '1080p')

                let buttons = [
                    {buttonId: `.ytmp4zl ${m.conn.text} 360p`, buttonText: {displayText: `Not Available... [${media.filesizeF}]`}, type: 1},
                    {buttonId: `.ytmp4zl ${m.conn.text} 720p`, buttonText: {displayText: `Not Available... [${media2.filesizeF}]`}, type: 1},
                    
                    {buttonId: `.ytmp4zl ${m.conn.text} 1080p`, buttonText: {displayText: `1080ᴘ [${media3.filesizeF}]`} , type: 1},
                    
                ]

                    let buttonMessage = {

                        //  image: { url : url },
                          
                          text :  `▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸
*ꜱᴇʟᴇᴄᴛ ᴠɪᴅᴇᴏ ʀᴇꜱᴏʟᴜᴛɪᴏɴ ,
◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂◂`,
                          
                      footer: `ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
                   buttons: buttons,
                      headerType: 2
                                     
                       }
                            const yt = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })

                            conn.sendReact(m.from, `🫠`, yt.key);

    } catch (e) {
        console.log(e)
        await conn.sendMessage( m.from, { text: `${e}` }, { quoted: m } );
    }

    
  });