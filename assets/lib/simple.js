const { extensionForMediaMessage, extractMessageContent, jidNormalizedUser, getContentType, normalizeMessageContent, proto, delay, downloadContentFromMessage, getBinaryNodeChild } = require("@adiwajshing/baileys")
const baileys = require("@adiwajshing/baileys")
const fs = require("fs")
const chalk = require("chalk")
const config = require('../../config');
const FileType = require("file-type")
const moment = require("moment-timezone")
const path = require("path")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { getRandom, fetchBuffer } = require("./function")
const { timeStamp } = require("console")
const nila = require("../../events")
const { formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention } = require('../../assets/lib/myfunc')
const { connect } = require("tls");
const { threadId } = require("worker_threads");
const prefa = ["", "!", ".", "🐦", "🐤", "🗿"];
let M = proto.WebMessageInfo;

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################
class WAConnection {
    constructor(conn) { for (let v in conn) this[v] = conn[v] }
	
    /**
     * 
     * @param {*} m 
     */
    async serializeM(m) {
        return exports.serialize(this, m)
    }

    /**
     * 
     * @param {*} text 
     * @returns 
     */
    parseMention(text) { return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')};

    /**
     * send text message
     * @param {*} id 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     */
    async sendText(id, text, quoted = {}, options = {}) { this.sendMessage(id, { text, ...options }, { quoted, ...options }) };

    /**
     * 
     * @param {*} message 
     * @param {*} fileName 
     * @returns 
     */
    async downloadMediaMessage(message, fileName) {
        message = message?.msg ? message?.msg : message
        let mimetype = (message.msg || message).mimetype || ''
        let mtype = message.type ? message.type.replace(/Message/gi, "") : mimetype.split("/")[0]
        const stream = await downloadContentFromMessage(message, mtype)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        if (fileName) {
            let ftype = await FileType.fromBuffer(buffer)
            let trueFileName = fileName ? (fileName + "." + ftype.ext || mimetype.split("/")[1]) : getRandom(ftype.ext || mimetype.split("/")[1])
            return fs.writeFileSync(trueFileName, buffer)
        } else {
            return buffer
        }
    }

    /**
     * 
     * @param {*} message 
     * @param {*} fileName 
     * @param {*} attachExtension 
     * @returns 
     */
     async downloadAndSaveMediaMessage(message, filename, attachExtension = true) {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    /**
     * 
     * @param {*} PATH 
     * @param {*} save 
     * @returns 
     */
    async getFile(PATH, save) {
        let filename
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await fetchBuffer(PATH) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__dirname, '../temp/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            filename,
	        size: await Buffer.byteLength(data),
            ...type,
            data
        }
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} PATH 
     * @param {*} fileName 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    async sendFile(jid, PATH, fileName, quoted = {}, options = {}) {
        let types = await this.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./Sticker')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: options.packname ? options.packname : nila.config.exif.packname, author: options.author ? options.author : nila.config.exif.author, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await this.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
	
    /**
     * 
     * @param {*} code
     * @returns 
     */
    async groupQueryInvite(code) {
        let result = await this.query({
            tag: "iq",
            attrs: {
                type: "get",
                xmlns: "w:g2",
                to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code } }]
        })
        let group = getBinaryNodeChild(result, "group")
        let descRes = getBinaryNodeChild(group, "description")
        let desc, descId, descOwner, descTime 
        if (descRes) {
            desc = getBinaryNodeChild(descRes, "body")?.content?.toString(),
            descId = descRes?.attrs?.id,
            descOwner = descRes?.attrs?.participant,
            descTime = descRes?.attrs?.t
        }
        const hasil = {
            id: group?.attrs?.id.includes("@") ? group?.attrs?.id : group?.attrs?.id + "@g.us",
            owner: group?.attrs?.creator,
            subject: group?.attrs?.subject,
            subjectOwner: group?.attrs?.s_o,
            subjectTime: group?.attrs?.s_t,
            size: group?.attrs?.size,
            creation: group?.attrs?.creation,
            participants: group?.content?.filter(v => v.tag == "participant").map(v => v.attrs),
            desc,
            descId,
            descOwner,
            descTime
        }

        return hasil
    }

    /**
    * for send  react message
    * @param {*} jid
    * @param {*} imoji 
    * @param {*} key 
    * @returns 
     */
    async sendReact(jid, imog = '', key) { await this.sendMessage(jid, {react: { text: imog, key: key }})};

    /**
    * Send error message
    * @param {*} jid
    * @param {*} error 
    * @param {*} imoji 
    * @param {*} key 
    * @returns 
     */
    async sendErrorMessage(jid, error, key, quoted, btn = []) {
    let butn = { buttonId: '.report', buttonText: {displayText: 'Report Error|Bug'}, type: 1}
    btn.push(butn)
    const imog = await nila.reactArry('ERROR');
    await this.sendMessage(jid, {
      react: { text: imog, key: key },
    });
    await this.sendMessage(
      jid,
      {
        image: {url: nila.config.image.url.D_E_ERR},
        footer: `${nila.config.exif.footer} Error Message`,
        buttons: btn,
        caption : nila.errorMessage(error),
      },
      { quoted: quoted }
    );
  }
}

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################


class serialize {
    constructor (conn, m, options = {}) {
        if (!m) return m;
        m = M.fromObject(m);
        for (let i in m) this[i] = m[i];
        this._key(conn);
        this._message(conn);
        this.conn = conn;
        this.body = this.text = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.contentText || this.message?.[this.type]?.selectedDisplayText || this.message?.[this.type]?.title || ""
        this._conn(conn);
    }

    _key (conn) {
        if (this.key) {

            setInterval(async () => {


                let old = performance.now()
                let neww = performance.now()
                let speedx = neww - old
        
                const timestampe = speed();
                const latensie = speed() - timestampe
        
                var _uptime = process.uptime() * 1000
                var uptime = clockString(_uptime)
        
        
                this.speed = `${latensie.toFixed(4)}`
                this.runtime = `${uptime}`
                
            }, 1000);

            this.from = jidNormalizedUser(this.key.remoteJid || this.key.participant)
            this.fromMe = this.key.fromMe
            this.id = this.key.id
            this.chat = this.from
            this.isBot = this.id.startsWith("BAE5") && this.id.length == 16
            this.botNumber = jidNormalizedUser(conn.user.id);
            this.isBaileys = this.id.startsWith("BAE5") && this.id.length == 16
            this.isGroup = this.from.endsWith("@g.us")
            this.sender = jidNormalizedUser(this.fromMe && conn.user?.id || this.key.participant || this.from || "")

            this.isCreator = config.OWNER.CREATOR.includes(`${this.sender.split`@`[0]}`)
            this.isROwner = this.isCreator || config.OWNER.R_OWNER.includes(`${this.sender.split`@`[0]}`)
            this.isOwner = this.isROwner
            this.isJf = this.isROwner
            this.isUrt = this.isROwner
	        this.isPrem =  this.isCreator

            this.itsMe = this.sender == this.botNumber == this.sender ? true : false;
    
    //====================================== FOR ATTACKS ================================================== //

            this.NspamC = config.OWNER.CREATOR
            this.Nspam = config.OWNER.CREATOR + ',' + config.N_SPAM + ',' + config.OWNER.JF_TEAM + ',' + config.OWNER.URT + ',' + config.SUDO + ',' + conn.user.id.split('@')[0].split(':')[0]


        };
    };

    _message (conn) {
        if (this.message) {
            this.type = getContentType(this.message)
            this.message = extractMessageContent(this.message)
            this.msg = this.message[this.type]
            this.mentions = this.msg?.contextInfo ? this.msg?.contextInfo.mentionedJid : []
            this.quoted = this.msg?.contextInfo ? this.msg?.contextInfo.quotedMessage : null
            if (this.quoted) {
                this.quoted.type = getContentType(this.quoted)
                this.quoted.msg = this.quoted[this.quoted.type]
                this.quoted.mentions = this.msg.contextInfo.mentionedJid
                this.quoted.id = this.msg.contextInfo.stanzaId
                this.quoted.sender = jidNormalizedUser(this.msg.contextInfo.participant || this.sender)
                this.quoted.from = this.from
                this.quoted.isGroup = this.quoted.from.endsWith("@g.us")
                this.quoted.isBot = this.quoted.id.startsWith("BAE5") && this.quoted.id == 16
                this.quoted.fromMe = (this.quoted.sender == jidNormalizedUser(conn.user && conn.user?.id))
                this.quoted.text = this.quoted.msg?.text || this.quoted.msg?.caption || this.quoted.msg?.conversation || this.quoted.msg?.contentText || this.quoted.msg?.selectedDisplayText || this.quoted.msg?.title || ""
                let vM = this.quoted.fakeObj = M.fromObject({
                    key: {
                        remoteJid: this.quoted.from,
                        fromMe: this.quoted.fromMe,
                        id: this.quoted.id
                    },
                    message: this.quoted,
                    ...(this.quoted.isGroup ? { participant: this.quoted.sender } : {})
                });
                this.quoted.delete = () => conn.sendMessage(this.quoted.from, { delete: vM.key })
                this.quoted.download = (pathFile) => conn.downloadMediaMessage(this.quoted.msg, pathFile)
            };
        };
    };

    _conn (conn) {

        this.conn = new Object

        this.displayText = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.contentText || this.message?.[this.type]?.selectedDisplayText || this.message?.[this.type]?.title || ""
        this.displayId = this.body = this.message?.conversation || this.message?.[this.type]?.text || this.message?.[this.type]?.caption || this.message?.[this.type]?.selectedButtonId || this.message?.[this.type]?.singleSelectReply?.selectedRowId || this.message?.[this.type]?.selectedId || this.type === "messageContextInfo" ? this.message.buttonsResponseMessage?.selectedButtonId || this.message.listResponseMessage?.singleSelectReply?.selectedRowId || this.text  : "";
        this.budy = typeof this.text == "string" ? this.text : "";
        this.prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(this.body) ? this.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
        this.isCmd = this.body.startsWith(this.prefix);
        this.command = this.body.replace(this.prefix, "").trim().split(/ +/).shift().toLowerCase();
        this.args = this.body.trim().split(/ +/).slice(1);
        this.pushName = this.pushName || "No Name";

        this.text = this.args.join(" ");
        this.quoted = this.quoted ? this.quoted : this;
        this.mime = (this.quoted.msg || this.quoted).mimetype || "";
        this.isMedia = /image|video|sticker|audio/.test(this.mime);
        this.from = this.key.remoteJid;
        this.messagesD = this.body.slice(0).trim().split(/ +/).shift().toLowerCase();

    // ===================================== Victim ======================================================= //

            let victim = this.text.split("/")[0].replace(/ /g,'').replace(/-/g, '').replace('(' , '').replace(')' , '')

            if (victim.length == 10 ) {
                victim = '94'+victim.slice(1);
            }
            
            if (victim.startsWith('+')) { 
                victim = victim.slice(1);
            }

            this.victim = victim


    // ===================================== Victim ======================================================== //


    }

    

    async download (pathFile) {
        await this.conn.downloadMediaMessage(this.msg, pathFile);
    };

    async reply (text, chatId = this.from, options = {}) { 
        await this.conn.sendMessage(chatId, { text: '```' + text + '```' }, { quoted: this })
    };
}

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################

const Spam_jf = (conn, m, options = {}) => {

/**
 * @Start_Function_jf
 * @Jayarathne_technical
 * @Project_Nila
 */

    jf = new Object
    

    jf.test = `sik`

// ===================================== Spam =======================================================

    /**
     * @victim
     */

    let victim = m.text.split("/")[0].replace(/ /g,'').replace(/-/g, '').replace('(' , '').replace(')' , '')

    if (victim.length == 10 ) {
        victim = '94'+victim.slice(1);
    }
    
    if (victim.startsWith('+')) { 
        victim = victim.slice(1);
    }

    jf.victim_num = victim
    jf.victim_id = victim.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    jf.victim = jf.victim_id

    /**
     * @count
     */

    let count = m.text.split("/")[1]

    jf.count = count

    /**
     * @spam_files
     */

    let spams = ['./assets/src/Spam/text/Bug 05.txt']
    let spam1 =  spams[Math.floor(Math.random() * spams.length)]
    let spam_text = fs.readFileSync(`${spam1}`)

    jf.spams = `${spam_text}`
    

// ===================================== Spam ======================================================== //

// ==================================== Nspam ========================================================== 

jf.NspamC = config.OWNER.CREATOR
jf.Nspam = config.OWNER.CREATOR + ',' + config.N_SPAM + ',' + config.OWNER.JF_TEAM + ',' + config.OWNER.URT + ',' + config.SUDO + ',' + conn.user.id.split('@')[0].split(':')[0]

// =================================== Nspam ============================================================ //

    
    return jf
/**
 * @End_Function_jf
 * @Jayarathne_technical
 * @Project_Nila
 */




}

module.exports = { Spam_jf, serialize, WAConnection };

//   this.conn.body =
//   this.mtype === "conversation"
//     ? this.message.conversation
//     : this.mtype == "imageMessage"
//     ? this.message.imageMessage.caption
//     : this.mtype == "videoMessage"
//     ? this.message.videoMessage.caption
//     : this.mtype == "extendedTextMessage"
//     ? this.message.extendedTextMessage.text
//     : this.mtype == "buttonsResponseMessage"
//     ? this.message.buttonsResponseMessage.selectedButtonId
//     : this.mtype == "listResponseMessage"
//     ? this.message.listResponseMessage.singleSelectReply.selectedRowId
//     : this.mtype == "templateButtonReplyMessage"
//     ? this.message.templateButtonReplyMessage.selectedId
//     : this.mtype === "messageContextInfo"
//     ? this.message.buttonsResponseMessage?.selectedButtonId ||
//       this.message.listResponseMessage?.singleSelectReply.selectedRowId ||
//       this.text
//     : "";


// m.group = new Object
//         m.group.groupMetadata = m.isGroup ? await conn.groupMetadata(m.from).catch((e) => {}) : "";
//         m.group.groupName = m.isGroup ? m.group.groupMetadata.subject : "Can not find group subject";
//         m.group.participants = m.isGroup ? m.group.groupMetadata.participants : [];
//         m.group.groupAdmins = m.isGroup ? m.group.participants.filter((v) => v.admin !== null).map((v) => v.id) : [];
//         m.group.groupOwner = m.isGroup ? m.group.groupMetadata.owner : null;
//         m.group.isBotAdmins = m.isGroup ? m.group.groupAdmins.includes(m.conn.botNumber) : false;
//         m.group.isAdmins = m.isGroup ? m.group.groupAdmins.includes(m.sender) : false;
