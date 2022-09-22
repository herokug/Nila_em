let buttons = [
    {buttonId: `.join (help_group)`, buttonText: {displayText: `Join Help Group`}, type: 1},
    {buttonId: `.restart`, buttonText: {displayText: `Restart bot`}, type: 1},
]

let buttonMessage = {
//image: { url: thumbnail },
caption: `×──*//ERROR MESSAGE──×

➢ TIME : ${date_lk}
➢ CHAT : ${m.chat}
➢ USER : ${m.sender}

➢ COMMAND : #${m.conn.command}

➢ REASON : _${error}_

➢ SOLUTION :  _hu****n_

⚠ JOIN OUR HELP GROUP 
FOR MORE DETAILS

×───ERROR MESSAGE*//───×`,

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.uptime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(`94702978512@s.whatsapp.net`, buttonMessage, { quoted: m })
}