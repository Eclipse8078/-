// setting DB

// const Database = require("@replit/database");
// const db = new Database();
var db = {};

const {
  MessageEmbed,
} = require('discord.js');

// add emoji

const emoji = {
  "띵킹": "🤔",
  "똥킹": "<:thonking:857855138721955861>",
  "샌즈": "<:sans:875151010367143936>"
};

// Short commands

const shorts = {
  "제작자": "저를 만드신 분은 `Eclipse#5212` 님이에요!",
  "코드": "마약봇의 심장과도 같은 코드에요!\nhttps://github.com/Eclipse8078/-",

  "이클립스": "제 아버지죠.. 언젠가는 실제로 만나게 될까요?",
  "eclipse": "제 아버지죠.. 언젠가는 실제로 만나게 될까요?",
  "Eclipse": "제 아버지죠.. 언젠가는 실제로 만나게 될까요?",
  
  "피에와": "**귀여운** 피에와이자 **이클립스의 여친**",
  "귀여운 피에와": "**세상에서 가장 귀여운** 피에와",
  "마약": "**늘 심심한** 사람 ~~이자 많은 노예들의 주인~~",
  "행인": "**피에와 집 근처에 거주하는** 사람",
  "루나스": "**여기 뭐 넣을까요**",
  "오조티타투": "**샌즈샌즈하고 섹시하고 맵 잘 만들고 유튜브 구독자 13명이고 얼불춤 잘하고 옵치 실버이고 롤 안하는** 오조티타투",

  "케인": "케인인님 코가크다 흐헤헤",
  "얼불춤": "얼불춤은 **망겜**이에요",
};

// Role giver

const Role = {
  "노예": "882055350809923656",
  "마법진 제작자": "897391910757494834",
  "제작자": "892761827849678908"
};

// ![역할이름]
function myAddRole(Message, roleName) {
  if (Message.member.hasPermission("ADMINISTRATOR")) {
    let role = Message.guild.roles.cache.find(
      (role) => role.id === Role[roleName]
    );
    let member = Message.mentions.members.first();

    member.roles.add(role);
    Message.reply(`${member}에게 **노예** 역할이 지급되었습니다!`);
  }
  else {
    Message.reply("권한이 부족합니다!");
  }
}

// About bot

// !도움
function myHelp(Message) {
  const embed = new MessageEmbed()
    .setTitle("도움말")
    .setColor("00bfff")
    .setDescription("마약봇의 도움말입니다!")
    .addFields(
      { name: '마약봇 도움', value: '이 도움말을 보여줍니다. 제 상태메시지에도 있어요!' },
      { name: '!지연시간 / !ping', value: '봇의 **지연시간**을 확인합니다.' },
      { name: '!생일', value: '마약봇의 생일을 알려줍니다. 와!' },
      { name: '!제작자', value: '**제작자 정보**를 보여줍니다.' },
      { name: '!프사', value: '마약봇 프사 제작자의 정보를 보여줍니다.' },

      { name: '!시간', value: '마약봇이 현재 시간을 알려줍니다. 한국 시간 기준이에요!' },
      { name: '!청소 [제거할 메시지 수]', value: '**[제거할 메시지 수]** 만큼 메시지를 제거합니다.\n***(보낸지 14일이 넘은 메시지는 삭제할 수 없습니다)***' },
      { name: '![역할 이름] [멘션]', value: '**멘션한 사람**에게 지정된 역할(노예, 마법진 제작자, 작곡가)을 추가합니다.\n**[관리자/서버장 전용 명령어입니다]**' },
      
      { name: '!유저명', value: '**특별한 명령어**들을 보여줍니다.' },
      { name: '마약봇 뭐해', value: '마약봇이 뭘 하고 있는지 보여줍니다. 아마도?' },
      { name: '마약봇 웃어줘', value: '웃어줍니다. 엌ㅋㅋㅋㅋ\n한번만 웃어달라면 한번만 웃어줍니다. 아마도?' },

      { name: '!기능요청 [아이디어: 공백 포함 가능]', value: '제작자에게 추가할 기능 아이디어를 제공합니다.' },
      
      { name: '마약봇 코드', value: '마약봇의 코드를 보여줍니다. 깃헙을 꾸며놨으니 구경가보세요!' },      
    );

  Message.reply(embed);
}

// !생일
function myBirthday(Message) {
  var today = new Date();
  var birthday = new Date(2021, 8, 21);
  var gap = today.getTime() - birthday.getTime();
  var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  Message.reply(`제 생일은 2021년 9월 21일이에요!\n태어난지 ${result} 일 됐네요!`);
}

// !지연시간 / !ping
function myLatency(Message, client) {
  var latency = Math.floor(client.uptime)
  var help = latency > 500 ? "\n~~살려주세요 🙄~~" : ""

  Message.reply(`지연 시간은 \`${latency}ms\` 입니다!${help}`);
}

// !프사
function myPFP(Message, client) {
  const embed = new MessageEmbed()
    .setTitle("프사 정보")
    .setColor("00bfff")
    .setDescription("현재 프사는 어레프님이 만들어 주셨어요!")
    .addField(
      "☆ 프사 공모 공지 ☆",
      "현재 <#901470834365976618> 채널에서 프사 공모전이 진행중이니 참고해주세요!"
    );

  Message.reply(embed);
}

// util

// !시간
function myTime(Message) {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(utcNow + koreaTimeDiff);

  var hours = koreaNow.getHours();
  var minutes = koreaNow.getMinutes();
  var seconds = koreaNow.getSeconds();

  Message.reply(`지금은 ${hours} 시 ${minutes} 분이에요!`);
}

// !청소
async function myRemove(Message, amount) {
  if (!amount)
    return Message.reply("삭제할 메시지의 수를 입력하지 않았습니다!");
  
  amount = amount[0];
  if (isNaN(amount))
    return Message.reply("삭제할 메시지의 수가 숫자가 아닙니다!");
  
  amount = Number(amount);
  if (amount > 100)
    return Message.reply("한번에 100개 이상의 메시지는 삭제할 수 없습니다!");
  if (amount < 1)
    return Message.reply("최소 1개의 메시지를 삭제해야 합니다!");

  await Message.channel.messages
    .fetch({ limit: amount })
    .then(
      (messages) => {
        Message.channel.bulkDelete(messages);
        amount = amount - 1;
        Message.reply(amount + "개의 메시지를 삭제했어요!");
      }
    );
}

// joke command

// !유저명
function myUser(Message) {
  const embed = new MessageEmbed()
    .setTitle("유저명 리스트")
    .setColor("bfff00")
    .setDescription("특별 커맨드가 등록된 분들을 보여드려요!")
    .addFields(
      { name: '#1', value: '피에와', inline: true },
      { name: '#2', value: '귀여운 피에와', inline: true },
      { name: '#3', value: '이클립스/Eclipse/eclipse', inline: true },
      { name: '#4', value: '마약', inline: true },
      { name: '#5', value: '행인', inline: true },
      { name: '#6', value: '루나스', inline: true },
      { name: '#7', value: '케인', inline: true },
      { name: '추가 예정', value: '이클한테 넣어달라고 핑하면 넣어준대요' },
    );

  Message.reply(embed);
}

// 마약봇 웃어줘
function myLaugh(Message, lot) {
  const base = "아이고 배야ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ";
  Message.reply(lot ? base.repeat(5) : base);
}

// 마약봇 뭐해
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

// !활동추가
function myAddDoing(Message) {
  if (!Message.member.roles.cache.has('901469987997351978')) { // 봇 프사 제작자
    return Message.channel.send("권한이 부족합니다!");
  }
  
  var args = Message.content.split(' ').slice(1).join(' ');

  const Worker = async () => {
    var list = await db.get('list');
    list.push(args);
    db.set("list", list).then(() => {});

    Message.channel.send("추가했어요!");
  };
  Worker();
}

// !기능요청
function myRequest(Message, client) {
  const word = Message.content.substr(6);
  var sendUser = Message.author.username;
  var user = client.users.cache.get("750504593531731998");
  user.send(`${sendUser}님의 기능 요청입니다!\n${word}`);
}

// debug

// !debug
function myDebug(Message) {
  if (Message.member.roles.cache.has('901469987997351978')) { // 봇 개발자
    const Worker = async () => {
      const doing = await db.get('list');
      Message.channel.send(`${doing}`);
    };
    Worker();
  }
  else {
    Message.channel.send("권한이 부족합니다!")
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