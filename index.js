// custom commands
var commands = require('./commands.js');
console.log(commands)

// set max events to 100 (default: 10)
require("events").EventEmitter.prototype._maxListeners = 100;

// Keep alive bot in replit server
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("CONNECTED");
});
server.listen(3000);

// Build Client
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// on Ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user
    .setActivity(
      "도움말은 '마약봇 도움'",
      { type: "PLAYING" } // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    ).then(
      (presence) => console.log(`Activity set to ${presence.activities[0].name}`)
    ).catch(console.error);
});

// on GuildMemberAdd
client.on("guildMemberAdd", async (newMember) => {
  const welcomeChannel = newMember.guild.channels.cache.find(
    (channel) => channel.name === "자유채팅"
  );

  welcomeChannel.send(
    `${newMember}, 환영합니다! 이곳은 C11H15NO2이자 C18H27NO3인 마약의 디스코드 서버입니다! ` +
      newMember.guild.channels.cache.get("862342701726433320").toString() +
      ` 채널을 먼저 읽어주세요!`
  );
});

// on Message
client.on("message", (Message) => {
  if (Message.author.bot) return;

  var content = Message.content;

  // add emoji
  if (Object.keys(commands.emoji).includes(content)) {
    Message.react(commands.emoji[content]);
    return;
  }

  var certain = content.startsWith('!');

  if (!(certain || content.startsWith('마약봇'))) return; // not my command
  content = content.replace("!", "").replace("마약봇 ", ""); // remove prefix

  // Short commands
  if (Object.keys(commands.shorts).includes(content)) {
    Message.reply(commands.shorts[content]);
    return;
  }

  // Role giver
  Object.keys(commands.Role).forEach(role => {
    if (content.startsWith(role)) {
      commands.myAddRole(Message, role);
    }
  });

  // Other commands
  switch (content.split(' ').slice(0, 1)[0]) {

    // About bot
    case "도움":
      commands.myHelp(Message);
      break;

    case "생일":
      commands.myBirthday(Message);
      break;
    
    case "지연시간":
    case "ping":
      commands.myLatency(Message, client);
      break;
    
    case "프사":
      commands.myPFP(Message, client);
      break;
    
    // util

    case "시간":
      commands.myTime(Message);
      break;
    
    case "청소":
      commands.myRemove(Message, content.split(' ').slice(1, 2));
      break;
    
    // joke command

    case "유저명":
      commands.myUser(Message);
      break;
    
    case "웃어줘":
      commands.myLaugh(Message, true);
      break;
    
    case "한번만 웃어줘":
      commands.myLaugh(Message, false);
      break;
    
    case "뭐해":
      commands.myDoing(Message);
      break;
    
    // Add request
    
    case "기능요청":
      commands.myRequest(Message, client);
      break;
    
    case "활동추가":
      commands.myAddDoing(Message);
      break;
    
    // debug

    case "debug":
      commands.myDebug(Message);
      break;

    // None of them -> not my command

    default:
      break;
  }
});

// client.login(process.env.TOKEN);
client.login("ODUwMDA2NDM5MzQ2OTYyNDky.YLjcLw.t6_N9l8rJNgHrz7nzBb-HSOYnH0");