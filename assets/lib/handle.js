const config = require('../../config');
const fs = require("fs");

//exports.handler = async (m , conn) => {
module.exports = (m , conn) => {
      

    const isNumber = x => typeof x === 'number' && !isNaN(x)

    if (!m.message) return;


    try {
      // TODO: use loop to insert data instead of this
      let user = global.db.data.users[m.sender]
      if (typeof user !== 'object')
          global.db.data.users[m.sender] = {}
      if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!('registered' in user)) user.registered = false
        if (!user.registered) {
          if (!('name' in user)) user.name = m.name
          if (!isNumber(user.age)) user.age = -1
          if (!isNumber(user.regTime)) user.regTime = -1
         }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.warn)) user.warn = 0
          if (!isNumber(user.level)) user.level = 0
          if (!('role' in user)) user.role = 'Novato'
          if (!('autolevelup' in user)) user.autolevelup = true
          if (!isNumber(user.money)) user.money = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
      } else
          global.db.data.users[m.sender] = {
              exp: 0,
              limit: 10,
              lastclaim: 0,
              registered: false,
              name: m.name,
              age: -1,
              regTime: -1,
              afk: -1,
              afkReason: '',
              banned: false,
              warn: 0,
              level: 0,
              role: 'Novato',
              autolevelup: true,
              money: 0,
              limit: 10,
              lastclaim: 0,
              lastweekly: 0,
              lastmonthly: 0,
          }
      let chat = global.db.data.chats[m.chat]
      if (typeof chat !== 'object')
          global.db.data.chats[m.chat] = {}
      if (chat) {
          if (!('isBanned' in chat))
              chat.isBanned = false
          if (!('welcome' in chat))
              chat.welcome = true
          if (!('detect' in chat))
              chat.detect = true
          if (!('sWelcome' in chat))
              chat.sWelcome = ''
          if (!('sBye' in chat))
              chat.sBye = ''
          if (!('sPromote' in chat))
              chat.sPromote = ''
          if (!('sDemote' in chat))
              chat.sDemote = ''
          if (!('delete' in chat))
              chat.delete = true
          if (!('modohorny' in chat))
              chat.modohorny = false    
          if (!('autosticker' in chat))
              chat.autosticker = false                    
          if (!('audios' in chat))
              chat.audios = false                            
          if (!('antiLink' in chat))
              chat.antiLink = false
          if (!('antiLink2' in chat))
              chat.antiLink2 = false
          if (!('antiviewonce' in chat))
              chat.antiviewonce = false
          if (!('antiToxic' in chat))
              chat.antiToxic = false
          if (!('antiTraba' in chat))
              chat.antiTraba = false
          if (!isNumber(chat.expired))
              chat.expired = 0
      } else
          global.db.data.chats[m.chat] = {
              isBanned: false,
              welcome: true,
              detect: true,
              sWelcome: '',
              sBye: '',
              sPromote: '',
              sDemote: '',
              delete: true,
              modohorny: true,
              autosticker: false,
              audios: true,
              antiLink: false,
              antiLink2: false,
              antiviewonce: false,
              antiToxic: false,
              antiTraba: false,
              expired: 0,
          }
      let settings = global.db.data.settings[conn.user.jid]
      if (typeof settings !== 'object') global.db.data.settings[conn.user.jid] = {}
      if (settings) {
          if (!('self' in settings)) settings.self = false
          if (!('autoread' in settings)) settings.autoread = false
          if (!('restrict' in settings)) settings.restrict = false
          if (!('antiCall' in settings)) settings.antiCall = false
          if (!('antiPrivate' in settings)) settings.antiPrivate = false
      } else global.db.data.settings[conn.user.jid] = {
          self: false,
          autoread: false,
          restrict: false,
          antiCall: false,
          antiPrivate: false
      }
  } catch (e) {
      console.error(e)
  }

  if (typeof m.text !== 'string')
            m.text = ''

// owners + premium

    const isROwner = config.OWNER.CREATOR.includes(`${m.sender.split`@`[0]}`)
    const isOwner = isROwner || m.fromMe || config.SUDO.includes(`${m.sender.split`@`[0]}`)
    const isJf = isROwner || config.OWNER.JF_TEAM.includes(`${m.sender.split`@`[0]}`)
    const isUrt = isROwner || config.OWNER.URT.includes(`${m.sender.split`@`[0]}`)

//console.log(m.sender.split`@`[0] + ' ' + isOwner)

//if (m.isBaileys) console.log('\nbot Detected')
//else console.log('\nNot bot')

    let usedPrefix
    let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

   /* const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await conn.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
    const participants = (m.isGroup ? groupMetadata.participants : []) || []
    const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
    const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
    const isRAdmin = user?.admin == 'superadmin' || false
    const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
    const isBotAdmin = bot?.admin || false // Are you Admin? */


    //console.log()

    
}

