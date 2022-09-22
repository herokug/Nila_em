/* ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗░░░███╗░░██╗██╗██╗░░░░░░█████╗░░█████╗░
   ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝░░░████╗░██║██║██║░░░░░██╔══██╗██╔══██╗
   ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░░░░██╔██╗██║██║██║░░░░░███████║███████║
   ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░░░██║╚████║██║██║░░░░░██╔══██║██╔══██║
   ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██╗██║░╚███║██║███████╗██║░░██║██║░░██║
   ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝ 
                                    by jayarathne_technical                                         */
const fs = require("fs");
const config = require('./config.js');

var Commands = [];
//const jsonConfig = JSON.parse(fs.readFileSync("./config.json"));

let json = JSON.parse(fs.readFileSync("./assets/language/en.json"));
//if (config.OPTIONS.LANG == 'SI') json = JSON.parse(fs.readFileSync("./assets/language/si.json"));

function getString(file) {
  return json["STRINGS"][file];
}

const reactArry = async (text) => {
  const reactArry = config.REACT // getString("react");
  const react = reactArry[text];
  let picak = react[Math.floor(Math.random() * react.length)];
  return picak;
};

function successfullMessage(msg) {
  return "```Successful 🦜: " + msg + "!```";
}

function errorMessage(msg) {
  return "```Error 🦜: " + msg + "!```";
}

function infoMessage(msg) {
  return "```Info 🦜: " + msg + "!```"
}

// ["search", "all", "downloade", "chat", "system", 'fun', '18+', 'owner', 'create',  ];

const addCommand = (info, func) => {
  // const SR = reactArry("SUCCESS");
  const SP = "\n*Processing...*";
  var infos = {
    on: info["on"] === null || undefined ? "" : info["on"],
    pattern: info["pattern"] === null || undefined ? [] : info["pattern"],
    desc: info["desc"] === null || undefined ? "" : info["desc"],
    usage: info["usage"] === null || undefined ? "" : info["usage"],
    warn: info["warn"] === null || undefined ? "" : info["warn"],
    sucReact: info["sucReact"] === null || undefined ? "💗" : info["sucReact"],
    onlyfromMe: info["fromMe"] === null || undefined ? false : info["fromMe"], // Or Sudo
    onlyGroup:
      info["onlyGroup"] === null || undefined ? false : info["onlyGroup"],
    onlyPm: info["onlyPm"] === null || undefined ? false : info["onlyPm"],
    strPross: info["strPross"] === null || undefined ? SP : info["strPross"],
    deleteCommand:
      info["deleteCommand"] === null || undefined
        ? false
        : info["deleteCommand"],
    category:
      info["category"] === null || undefined ? ["all"] : info["category"],
    dontAddCommandList:
      info["dontAddCommandList"] === null || undefined
        ? false
        : info["dontAddCommandList"],
    function: func,
  };
  Commands.push(infos);
  return infos;
};

module.exports = {
  successfullMessage: successfullMessage,
  errorMessage: errorMessage,
  infoMessage: infoMessage,
  addCommand: addCommand,
  //jsonConfig,
  //jsonConfig,
  reactArry: reactArry,
  getString: getString,
  commands: Commands,
  //language: json,
};
