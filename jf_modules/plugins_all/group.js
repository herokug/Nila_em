/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_nila.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_nila.
// ════════════════════════════ */

const nila = require("../../events");
const config = require('../../config')
//const lang = nila.getString("github");
const axios = require("axios");

nila.addCommand({ pattern: ["g-promote"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"], },
  async (m, conn) => {
    console.log(nila.config.reply.group)
    if (!m.isJf) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(config.reply.group) }, { quoted: m } ); };
    try {
        if (!m.mentions.length == 0) {
            await conn.sendMessage( m.from, { text: nila.infoMessage("😎 Adding new group admin. Using mentions.") }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, m.mentions, "promote" );
        }
        if (m.quoted) {
            await conn.sendMessage( m.from, { text: "😎 Adding new group admin. Using reply." }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, [m.quoted.sender], "promote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-demote"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        if (!m.mentions.length == 0) {
            await conn.sendMessage( m.from, { text: nila.infoMessage("🤐 Removing new group admin. Using mentions.") }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, m.mentions, "demote" );
        }
        if (m.quoted) {
            await conn.sendMessage( m.from, { text: nila.infoMessage("🤐 Removing group admin. Using reply.") }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, [m.quoted.sender], "demote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-remove"], usage: '<mentions|reply>', sucReact: "😤", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        if (!m.mentions.length == 0) {
            await conn.sendMessage( m.from, { text: nila.infoMessage("😤 Removing group member. Using mentions.") }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, m.mentions, "remove" );
        }
        if (m.quoted) {
            await conn.sendMessage( m.from, { text: nila.infoMessage("😤 Removing group member. Using reply.") }, { quoted: m } );
            await conn.groupParticipantsUpdate( m.from, [m.quoted.sender], "remove" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.conn.text) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        let array = m.conn.text.replace('+', '').replace(' ', '').split('/');
        array.map((item) => (item += "@s.whatsapp.net")); 
        await conn.sendMessage( m.from, { text: nila.infoMessage("😋 Add group member. Using number.") }, { quoted: m } );
        await conn.groupParticipantsUpdate( m.from, array, "add" );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

// replace this parameter with  "add", "remove", "demote" or "promote" ===============

nila.addCommand({ pattern: ["g-name"], usage: '<name>', sucReact: "🙃", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.conn.text) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: m } ); };
    if (m.conn.text > 25) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Text is too long') }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        await conn.sendMessage( m.from, { text: nila.infoMessage("🙃 Changing group name.") }, { quoted: m } );
        await conn.groupUpdateSubject(m.from, m.conn.text);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-desc"], usage: '<desc>', sucReact: "🙂", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.conn.text) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: m } ); };
    if (m.conn.text > 75) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Text is too long') }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        await conn.sendMessage( m.from, { text: nila.infoMessage("🙂 Changing group description.") }, { quoted: m } );
        await conn.groupUpdateDescription(m.from, m.conn.text);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

//  =========================================================================================

nila.addCommand({ pattern: ["g-open", "g-close", "g-lock", "g-unlock"], sucReact: "⚙", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        if (m.conn.command == "g-open") {
            await conn.sendMessage( m.from, { text: nila.infoMessage("⚙ Opening group") }, { quoted: m } );
            await conn.groupSettingUpdate(m.from, "not_announcement");
        } else if (m.conn.command == "g-close") {
            await conn.sendMessage( m.from, { text: nila.infoMessage("⚙ Closing group") }, { quoted: m } );
            await conn.groupSettingUpdate(m.from, "announcement");
        } else if (m.conn.command == "g-unlock") {
            await conn.sendMessage( m.from, { text: nila.infoMessage("⚙ Unlocking group") }, { quoted: m } );
            await conn.groupSettingUpdate(m.from, "unlocked");
        } else if (m.conn.command == "g-lock") {
            await conn.sendMessage( m.from, { text: nila.infoMessage("⚙ locking group") }, { quoted: m } );
            await conn.groupSettingUpdate(m.from, "locked");
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

// =========================================================================================

nila.addCommand({ pattern: ["g-lave"], sucReact: "👋", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        let mentions = await conn.groupMetadata(m.from).participants;
        await conn.sendMessage( m.from, { text: nila.infoMessage("👋 Good Bye My Friends. I'M kicking"), mentions }, { quoted: m } );
        await conn.groupLeave(m.from)
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-link"], sucReact: "🔗", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        const code = await conn.groupInviteCode(m.from);
        await conn.sendMessage( m.from, { text: `🔗 Group Link: https://chat.whatsapp.com/${code}` }, { quoted: m } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-revoke"], sucReact: "🔗", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    if (!m.isGroup) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.group) }, { quoted: m } ); };
    try {
        const code = await conn.groupRevokeInvite(m.from);
        await conn.sendMessage( m.from, { text: `🔗 Group link revoked.` }, { quoted: m } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

// =============================================================================

nila.addCommand({ pattern: ["g-joing"], sucReact: "🆗", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.text) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Enter link') }, { quoted: m } ); };
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    try {
        let urlArray = (m.conn.args[0]).split("/"); 
        if (!urlArray[2] == 'chat.whatsapp.com') { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Enter valid link') }, { quoted: m } ); };
        const response = await conn.groupAcceptInvite(urlArray[3]);
        await conn.sendMessage( m.from, { text: `⚜ Joined: ${response}` }, { quoted: m } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["g-acpt", "g-accept"], sucReact: "🆗", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.quoted || m.quoted == null) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage('Reply invite m.') }, { quoted: m } ); };
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    try {
        const response = await conn.groupAcceptInviteV4(m.quoted.fakeObj.key , m.quoted)
        await conn.sendMessage( m.from, { text: `⚜ Joined: ${response}` }, { quoted: m } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

nila.addCommand({ pattern: ["invite-info"], sucReact: "🆗", category: ["group", "all"], },
  async (m, conn) => {
    if (!m.conn.isCreator) { global.catchError = true; return await conn.sendMessage( m.from, { text: nila.errorMessage(nila.config.reply.owner) }, { quoted: m } ); };
    try {
        let urlArray = (m.conn.args[0]).split("/")[3]; 
        let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await conn.groupGetInviteInfo(urlArray);
        await conn.sendMessage( m.from, { text: `⚜ Joined: ${id} ${owner} ${subject} ${subjectOwner} ${subjectTime} ${creation} ${desc} ${descOwner} ${descId} ${restrict} ${announce} ${size} ${ephemeralDuration}` }, { quoted: m } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await conn.sendErrorMessage( m.from, err, m.key, m );
    };
  }
);

// title & participants
// const group = await sock.groupCreate("My Fab Group", ["1234@s.whatsapp.net", "4564@s.whatsapp.net"])
// console.log ("created group with id: " + group.gid)
// sock.sendMessage(group.id, { text: 'hello there' }) // say hello to everyone on the group


