// setting DB

// const Database = require("@replit/database");
// const db = new Database();
var db = {};

const {
  MessageEmbed,
} = require('discord.js');

// add emoji

const emoji = {
  "λ΅νΉ": "π€",
  "λ₯νΉ": "<:thonking:857855138721955861>",
  "μμ¦": "<:sans:875151010367143936>"
};

// Short commands

const shorts = {
  "μ μμ": "μ λ₯Ό λ§λμ  λΆμ `Eclipse#5212` λμ΄μμ!",
  "μ½λ": "λ§μ½λ΄μ μ¬μ₯κ³Όλ κ°μ μ½λμμ!\nhttps://github.com/Eclipse8078/-",

  "μ΄ν΄λ¦½μ€": "μ  μλ²μ§μ£ .. μΈμ  κ°λ μ€μ λ‘ λ§λκ² λ κΉμ?",
  "eclipse": "μ  μλ²μ§μ£ .. μΈμ  κ°λ μ€μ λ‘ λ§λκ² λ κΉμ?",
  "Eclipse": "μ  μλ²μ§μ£ .. μΈμ  κ°λ μ€μ λ‘ λ§λκ² λ κΉμ?",
  
  "νΌμμ": "**κ·μ¬μ΄** νΌμμμ΄μ **μ΄ν΄λ¦½μ€μ μ¬μΉ**",
  "κ·μ¬μ΄ νΌμμ": "**μΈμμμ κ°μ₯ κ·μ¬μ΄** νΌμμ",
  "λ§μ½": "**λ μ¬μ¬ν** μ¬λ ~~μ΄μ λ§μ λΈμλ€μ μ£ΌμΈ~~",
  "νμΈ": "**νΌμμ μ§ κ·Όμ²μ κ±°μ£Όνλ** μ¬λ",
  "λ£¨λμ€": "**μ¬κΈ° λ­ λ£μκΉμ**",
  "μ€μ‘°ν°νν¬": "**μμ¦μμ¦νκ³  μΉμνκ³  λ§΅ μ λ§λ€κ³  μ νλΈ κ΅¬λμ 13λͺμ΄κ³  μΌλΆμΆ€ μνκ³  μ΅μΉ μ€λ²μ΄κ³  λ‘€ μνλ** μ€μ‘°ν°νν¬",

  "μΌμΈ": "μΌμΈμΈλ μ½κ°ν¬λ€ νν€ν€",
  "μΌλΆμΆ€": "μΌλΆμΆ€μ **λ§κ²**μ΄μμ",
};

// Role giver

const Role = {
  "λΈμ": "882055350809923656",
  "λ§λ²μ§ μ μμ": "897391910757494834",
  "μ μμ": "892761827849678908"
};

// ![μ­ν μ΄λ¦]
function myAddRole(Message, roleName) {
  if (Message.member.hasPermission("ADMINISTRATOR")) {
    let role = Message.guild.roles.cache.find(
      (role) => role.id === Role[roleName]
    );
    let member = Message.mentions.members.first();

    member.roles.add(role);
    Message.reply(`${member}μκ² **λΈμ** μ­ν μ΄ μ§κΈλμμ΅λλ€!`);
  }
  else {
    Message.reply("κΆνμ΄ λΆμ‘±ν©λλ€!");
  }
}

// About bot

// !λμ
function myHelp(Message) {
  const embed = new MessageEmbed()
    .setTitle("λμλ§")
    .setColor("00bfff")
    .setDescription("λ§μ½λ΄μ λμλ§μλλ€!")
    .addFields(
      { name: 'λ§μ½λ΄ λμ', value: 'μ΄ λμλ§μ λ³΄μ¬μ€λλ€. μ  μνλ©μμ§μλ μμ΄μ!' },
      { name: '!μ§μ°μκ° / !ping', value: 'λ΄μ **μ§μ°μκ°**μ νμΈν©λλ€.' },
      { name: '!μμΌ', value: 'λ§μ½λ΄μ μμΌμ μλ €μ€λλ€. μ!' },
      { name: '!μ μμ', value: '**μ μμ μ λ³΄**λ₯Ό λ³΄μ¬μ€λλ€.' },
      { name: '!νμ¬', value: 'λ§μ½λ΄ νμ¬ μ μμμ μ λ³΄λ₯Ό λ³΄μ¬μ€λλ€.' },

      { name: '!μκ°', value: 'λ§μ½λ΄μ΄ νμ¬ μκ°μ μλ €μ€λλ€. νκ΅­ μκ° κΈ°μ€μ΄μμ!' },
      { name: '!μ²­μ [μ κ±°ν  λ©μμ§ μ]', value: '**[μ κ±°ν  λ©μμ§ μ]** λ§νΌ λ©μμ§λ₯Ό μ κ±°ν©λλ€.\n***(λ³΄λΈμ§ 14μΌμ΄ λμ λ©μμ§λ μ­μ ν  μ μμ΅λλ€)***' },
      { name: '![μ­ν  μ΄λ¦] [λ©μ]', value: '**λ©μν μ¬λ**μκ² μ§μ λ μ­ν (λΈμ, λ§λ²μ§ μ μμ, μκ³‘κ°)μ μΆκ°ν©λλ€.\n**[κ΄λ¦¬μ/μλ²μ₯ μ μ© λͺλ Ήμ΄μλλ€]**' },
      
      { name: '!μ μ λͺ', value: '**νΉλ³ν λͺλ Ήμ΄**λ€μ λ³΄μ¬μ€λλ€.' },
      { name: 'λ§μ½λ΄ λ­ν΄', value: 'λ§μ½λ΄μ΄ λ­ νκ³  μλμ§ λ³΄μ¬μ€λλ€. μλ§λ?' },
      { name: 'λ§μ½λ΄ μμ΄μ€', value: 'μμ΄μ€λλ€. μγγγγ\nνλ²λ§ μμ΄λ¬λΌλ©΄ νλ²λ§ μμ΄μ€λλ€. μλ§λ?' },

      { name: '!κΈ°λ₯μμ²­ [μμ΄λμ΄: κ³΅λ°± ν¬ν¨ κ°λ₯]', value: 'μ μμμκ² μΆκ°ν  κΈ°λ₯ μμ΄λμ΄λ₯Ό μ κ³΅ν©λλ€.' },
      
      { name: 'λ§μ½λ΄ μ½λ', value: 'λ§μ½λ΄μ μ½λλ₯Ό λ³΄μ¬μ€λλ€. κΉνμ κΎΈλ©°λ¨μΌλ κ΅¬κ²½κ°λ³΄μΈμ!' },      
    );

  Message.reply(embed);
}

// !μμΌ
function myBirthday(Message) {
  var today = new Date();
  var birthday = new Date(2021, 8, 21);
  var gap = today.getTime() - birthday.getTime();
  var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  Message.reply(`μ  μμΌμ 2021λ 9μ 21μΌμ΄μμ!\nνμ΄λμ§ ${result} μΌ λλ€μ!`);
}

// !μ§μ°μκ° / !ping
function myLatency(Message, client) {
  var latency = Math.floor(client.uptime)
  var help = latency > 500 ? "\n~~μ΄λ €μ£ΌμΈμ π~~" : ""

  Message.reply(`μ§μ° μκ°μ \`${latency}ms\` μλλ€!${help}`);
}

// !νμ¬
function myPFP(Message, client) {
  const embed = new MessageEmbed()
    .setTitle("νμ¬ μ λ³΄")
    .setColor("00bfff")
    .setDescription("νμ¬ νμ¬λ μ΄λ νλμ΄ λ§λ€μ΄ μ£Όμ¨μ΄μ!")
    .addField(
      "β νμ¬ κ³΅λͺ¨ κ³΅μ§ β",
      "νμ¬ <#901470834365976618> μ±λμμ νμ¬ κ³΅λͺ¨μ μ΄ μ§νμ€μ΄λ μ°Έκ³ ν΄μ£ΌμΈμ!"
    );

  Message.reply(embed);
}

// util

// !μκ°
function myTime(Message) {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utcNow + koreaTimeDiff);

  var hours = koreaNow.getHours();
  var minutes = koreaNow.getMinutes();
  var seconds = koreaNow.getSeconds();

  Message.reply(`μ§κΈμ ${hours} μ ${minutes} λΆμ΄μμ!`);
}

// !μ²­μ
async function myRemove(Message, amount) {
  if (!amount)
    return Message.reply("μ­μ ν  λ©μμ§μ μλ₯Ό μλ ₯νμ§ μμμ΅λλ€!");
  
  amount = amount[0];
  if (isNaN(amount))
    return Message.reply("μ­μ ν  λ©μμ§μ μκ° μ«μκ° μλλλ€!");
  
  amount = Number(amount);
  if (amount > 100)
    return Message.reply("νλ²μ 100κ° μ΄μμ λ©μμ§λ μ­μ ν  μ μμ΅λλ€!");
  if (amount < 1)
    return Message.reply("μ΅μ 1κ°μ λ©μμ§λ₯Ό μ­μ ν΄μΌ ν©λλ€!");

  await Message.channel.messages
    .fetch({ limit: amount })
    .then(
      (messages) => {
        Message.channel.bulkDelete(messages);
        amount = amount - 1;
        Message.reply(amount + "κ°μ λ©μμ§λ₯Ό μ­μ νμ΄μ!");
      }
    );
}

// joke command

// !μ μ λͺ
function myUser(Message) {
  const embed = new MessageEmbed()
    .setTitle("μ μ λͺ λ¦¬μ€νΈ")
    .setColor("bfff00")
    .setDescription("νΉλ³ μ»€λ§¨λκ° λ±λ‘λ λΆλ€μ λ³΄μ¬λλ €μ!")
    .addFields(
      { name: '#1', value: 'νΌμμ', inline: true },
      { name: '#2', value: 'κ·μ¬μ΄ νΌμμ', inline: true },
      { name: '#3', value: 'μ΄ν΄λ¦½μ€/Eclipse/eclipse', inline: true },
      { name: '#4', value: 'λ§μ½', inline: true },
      { name: '#5', value: 'νμΈ', inline: true },
      { name: '#6', value: 'λ£¨λμ€', inline: true },
      { name: '#7', value: 'μΌμΈ', inline: true },
      { name: 'μΆκ° μμ ', value: 'μ΄ν΄νν λ£μ΄λ¬λΌκ³  ννλ©΄ λ£μ΄μ€λμ' },
    );

  Message.reply(embed);
}

// λ§μ½λ΄ μμ΄μ€
function myLaugh(Message, lot) {
  const base = "μμ΄κ³  λ°°μΌγγγγγγγγγγ";
  Message.reply(lot ? base.repeat(5) : base);
}

// λ§μ½λ΄ λ­ν΄
function myDoing(Message) {
  const Worker = async () => {
    const doing = await db.get('list');
    const index = Math.floor(Math.random() * doing.length);
    const nowDoing = doing[index];
    Message.channel.send(`${nowDoing}`);
  };
  Worker();
}

// Add request

// !νλμΆκ°
function myAddDoing(Message) {
  if (!Message.member.roles.cache.has('901469987997351978')) { // λ΄ νμ¬ μ μμ
    return Message.channel.send("κΆνμ΄ λΆμ‘±ν©λλ€!");
  }
  
  var args = Message.content.split(' ').slice(1).join(' ');

  const Worker = async () => {
    var list = await db.get('list');
    list.push(args);
    db.set("list", list).then(() => {});

    Message.channel.send("μΆκ°νμ΄μ!");
  };
  Worker();
}

// !κΈ°λ₯μμ²­
function myRequest(Message, client) {
  const word = Message.content.substr(6);
  var sendUser = Message.author.username;
  var user = client.users.cache.get("750504593531731998");
  user.send(`${sendUser}λμ κΈ°λ₯ μμ²­μλλ€!\n${word}`);
}

// debug

// !debug
function myDebug(Message) {
  if (Message.member.roles.cache.has('901469987997351978')) { // λ΄ κ°λ°μ
    const Worker = async () => {
      const doing = await db.get('list');
      Message.channel.send(`${doing}`);
    };
    Worker();
  }
  else {
    Message.channel.send("κΆνμ΄ λΆμ‘±ν©λλ€!")
  }
}

// exports

module.exports = {
  emoji, shorts, Role, myAddRole,
  myHelp, myBirthday, myLatency, myPFP,
  myTime, myRemove,
  myUser, myLaugh, myDoing,
  myRequest, myAddDoing,
  myDebug
};