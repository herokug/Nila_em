/* ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
   ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
   ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
   ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
   ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
   ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                    by jayarathne_technical                                         */

// ================= import modules ========================== //

const nila = require("../../events");
const { delay } = require('@adiwajshing/baileys');
const chalk = require('chalk');
const config = require('../../config');
const axios = require('axios');

// ================= start plugin ============================ //






nila.addCommand( 
    { pattern: ["nila"], desc: `des`, sucReact: "✅", category: [ "tet", "normal" ] ,  },

async (m, conn) => {

// ==================== defination =================== //


// ==================== end definations =============== //

// ================== if =========================== //

let msg = text
    let uid = m.sender

try{
    const chatbot = (await axios.get(`http://api.brainshop.ai/get?bid=170032&key=vbQ9jM020L0gOZqx&uid=${uid}&msg=${msg}`)).data
   
    console.log(chatbot)

    console.log(chatbot.cnt)

    await conn.sendMessage(m.chat, {text: chatbot.cnt } , { quoted : m });
    
}catch (e) {
    let error = `${e}`
    console.log(e)

  

 

   /*await conn.sendMessage( m.chat , {
    react: { text: `📡` , key: sik.key },
})*/



 

 /*await conn.sendMessage( m.chat , {
    react: { text: `✅` , key: sik.key },
})*/
}}
// ================== enfif ======================== //


// ================= code goes here =============== //


// ================= end code ================================= //

})

// ================= end plugin ============================== //