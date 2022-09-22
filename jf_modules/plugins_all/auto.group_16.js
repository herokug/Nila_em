// Auto attack groups
const nila = require("../../events");
const { delay } = require('@adiwajshing/baileys');
const chalk = require('chalk');
const config = require('../../config');
 

 nila.addCommand( 
    { pattern: ["join16" , ".16" , "add16" , "create16"], desc: `GM`, sucReact: "🦜", category: [ "chat", "all" ] ,  },

async (m, conn) => {

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let groups = global.db.data.spam[user_id].spam_groups
const spam_manage = 'DCFDQm43wK11c2jiTl31ft'
        if (global.db.data.spam[user_id].spam_groups.status == 'active') {
        
        await conn.sendMessage(
            m.chat,
            { text: `Already Created and Activated 16 attack groups !`  },
            { quoted: m }
          );

        // console.log(groups.main)

          return;
        }
      //if (global.db.data.settings[user_id].mode == `pro_all` || global.db.data.settings[user_id].mode == `pro_spam` ) {
    

      
      

    //  const group0 = JSON.stringify(groups);


      try {

      //  if (!groups.status) {

        console.log(chalk.cyan.italic('\nCreating Attack Groups !'))

        await conn.sendMessage(
            m.chat,
            { text:  `Creating Attack Groups !` },
          );

        if (!('i' in groups)) {
            await delay(1000)
            const group_1 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_1 = await conn.groupInviteCode(group_1.id)
                groups.i = {
                    id : group_1.id ,
                    code : code_1
                }
               // groups.main.id.code = code_main
        }
        if (!('ii' in groups)) {
            await delay(1000)
            const group_2 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_2 = await conn.groupInviteCode(group_2.id)
                 groups.ii = {
                     id : group_2.id ,
                     code : code_2
                 }
        }
        if (!('iii' in groups)) {
            await delay(1000)
            const group_3 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ɪɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_3 = await conn.groupInviteCode(group_3.id)
                 groups.iii = {
                     id : group_3.id ,
                     code : code_3
                 }
        }
        if (!('iv' in groups)) {
            await delay(1000)
            const group_4 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ɪᴠ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_4 = await conn.groupInviteCode(group_4.id)
                 groups.iv = {
                     id : group_4.id ,
                     code : code_4
                 }
        }
        if (!('v' in groups)) {
            await delay(1000)
            const group_5 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ᴠ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_5 = await conn.groupInviteCode(group_5.id)
                 groups.v = {
                     id : group_5.id ,
                     code : code_5
                 }
        }
        if (!('vi' in groups)) {
            await delay(1000)
            const group_6 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ᴠɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_6 = await conn.groupInviteCode(group_6.id)
                 groups.vi = {
                     id : group_6.id ,
                     code : code_6
                 }
        }
        if (!('vii' in groups)) {
            await delay(1000)
            const group_7 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ᴠɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_7 = await conn.groupInviteCode(group_7.id)
                 groups.vii = {
                     id : group_7.id ,
                     code : code_7
                 }
        }
        if (!('viii' in groups)) {
            await delay(1000)
            const group_8 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ᴠɪɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_8 = await conn.groupInviteCode(group_8.id)
                 groups.viii = {
                     id : group_8.id ,
                     code : code_8
                 }
        }
        if (!('ix' in groups)) {
            await delay(1000)
            const group_9 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.ɪx 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_9 = await conn.groupInviteCode(group_9.id)
                 groups.ix = {
                     id : group_9.id ,
                     code : code_9
                 }
        }
        if (!('x' in groups)) {
            await delay(1000)
            const group_10 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.x 🦜`,
                 [`17099107588@s.whatsapp.net`])
                 let code_10 = await conn.groupInviteCode(group_10.id)
                 groups.x = {
                     id : group_10.id ,
                     code : code_10
                 }
        }
        if (!('xi' in groups)) {
            await delay(1000)
            const group_11 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_11 = await conn.groupInviteCode(group_11.id)
                 groups.xi = {
                     id : group_11.id ,
                     code : code_11
                 }
        }
        if (!('xii' in groups)) {
            await delay(1000)
            const group_12 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_12 = await conn.groupInviteCode(group_12.id)
                 groups.xii = {
                     id : group_12.id ,
                     code : code_12
                 }
        }
        if (!('xiii' in groups)) {
            await delay(1000)
            const group_13 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xɪɪɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_13 = await conn.groupInviteCode(group_13.id)
                 groups.xiii = {
                     id : group_13.id ,
                     code : code_13
                 }
        }
        if (!('xiv' in groups)) {
            await delay(1000)
            const group_14 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xɪᴠ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_14 = await conn.groupInviteCode(group_14.id)
                 groups.xiv = {
                     id : group_14.id ,
                     code : code_14
                 }
        }
        if (!('xv' in groups)) {
            await delay(1000)
            const group_15 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xᴠ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_15 = await conn.groupInviteCode(group_15.id)
                 groups.xv= {
                     id : group_15.id ,
                     code : code_15
                 }        }
        if (!('xvi' in groups)) {
            await delay(1000)
            const group_16 = await conn.groupCreate(
                `ᴀᴛᴛᴀᴄᴋ_ɢʀᴏᴜᴘ.xᴠɪ 🦜`,
                 [`17099107588@s.whatsapp.net`])
                let code_16 = await conn.groupInviteCode(group_16.id)
                 groups.xvi = {
                     id : group_16.id ,
                     code : code_16
                 }
      //  }

        groups.status = 'active'

        await conn.sendMessage(
            m.chat,
            { text: `Succesfully Created 16 attack groups`  },
            { quoted: m }
          );

    }

    } catch (e) {
        let error = `${e}`
        groups.status = '?active'
        console.log(e)
        return  conn.sendMessage(
            m.chat,
            { text: `${error}`  },
            { quoted: m }
          );
        if (error.includes('rate-overlimit'))
        console.log('WhatsApp Rate - Over limited : Please try again later')

   // }

    }

// end


})

nila.addCommand( 
    { pattern: [".des16" , ".16_des"], desc: `GM`, sucReact: "🏴‍☠️", category: [ "chat", "all" ] ,  },

async (m, conn) => {

let user_id = conn.user.id.split(':')[0]+'@s.whatsapp.net';
let groups = global.db.data.spam[user_id].spam_groups

if (!m.conn.text) return conn.sendMessage(m.chat ,{ text: config.reply.need_text} , { quoted: m})

    await conn.sendMessage(m.chat ,{ text: 'Changing attack groups descrptions'} , { quoted: m})

// for (let i = 0; i < 16+1; i++) {}

    await conn.groupUpdateDescription(groups.main, m.conn.text)
    await conn.groupUpdateDescription(groups.i, m.conn.text)
    await conn.groupUpdateDescription(groups.ii, m.conn.text)
    await conn.groupUpdateDescription(groups.iii, m.conn.text)
    await conn.groupUpdateDescription(groups.iv, m.conn.text)
    await conn.groupUpdateDescription(groups.v, m.conn.text)
    await conn.groupUpdateDescription(groups.vi, m.conn.text)
    await conn.groupUpdateDescription(groups.vii, m.conn.text)
    await conn.groupUpdateDescription(groups.viii, m.conn.text)
    await conn.groupUpdateDescription(groups.ix, m.conn.text)
    await conn.groupUpdateDescription(groups.x, m.conn.text)
    await conn.groupUpdateDescription(groups.xi, m.conn.text)
    await conn.groupUpdateDescription(groups.xii, m.conn.text)
    await conn.groupUpdateDescription(groups.xiii, m.conn.text)
    await conn.groupUpdateDescription(groups.xiv, m.conn.text)
    await conn.groupUpdateDescription(groups.xv, m.conn.text)
    await conn.groupUpdateDescription(groups.xvi, m.conn.text)

    await conn.sendMessage(
        m.chat,
        { text: `Succesfully changed 16 attack groups des to "${m.conn.text}"`  },
        { quoted: m }
      );

})