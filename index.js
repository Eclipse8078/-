const Discord = require("discord.js");
const http = require('http');
require('events').EventEmitter.prototype._maxListeners = 100;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('CONNECTED');
});
server.listen(3000);
const {
  Client,
  Intents,
  CategoryChannel,
  MessageEmbed,
} = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
    client.user.setActivity('도움말은 \'마약봇 도움\'', { type: 'PLAYING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
})




//!도움말 명령어
client.on("message", (Message) => {
  if (Message.content === "마약봇 도움") {
    const embed = new Discord.MessageEmbed()
      .setTitle("도움말") // 1 - embed의 제목을 담당합니다.
      .setColor("00bfff") // 2 - embed 사이드 바의 색을 정합니다.
      .setDescription(
        "**!지연시간** 또는 **!ping**\n\n봇의 **지연시간**을 확인합니다.\n\n\n**!제작자**\n\n**제작자 정보**를 확인합니다.\n\n\n**!유저명** \n\n**특별한 명령어** 들을 확인합니다.\n\n\n**!청소 [제거할 메시지 수]**\n\n **[제거할 메시지 수]** 만큼 메시지를 제거합니다.\n***_(보낸지 14일이 넘은 메시지는 삭제할 수 없습니다)_***\n\n\n**!역할 이름 [멘션]**\n\n **멘션한 사람**에게 역할을 추가합니다"
      ); // 3 - 실제로 설명을 담당하는 곳입니다.

    Message.channel.send(embed);
  }
});




client.on('guildMemberAdd', async newMember => {
   const welcomeChannel = newMember.guild.channels.cache.find(channel => channel.name === '자유채팅')
   welcomeChannel.send(`${newMember}, 환영합니다! 이곳은 C11H15NO2이자 C18H27NO3인 마약의 디스코드 서버입니다! `
   + newMember.guild.channels.cache.get('862342701726433320').toString()
   + ` 채널을 먼저 읽어주세요!`);
});



//!지연시간 명령어
client.on("message", (Message) => {
  if (Message.content === "!지연시간") {
    Message.reply(
      "지연 시간은 `" + Math.floor(client.uptime) + "ms` 입니다 🙄\n ~~살려주세요~~"
    );
  }
});

//!ping 명령어
client.on("message", (Message) => {
  if (Message.content === "!ping") {
    Message.reply(
      "지연 시간은 `" + Math.floor(client.uptime) + "ms` 입니다 🙄\n ~~살려주세요~~"
    );
  }
});

//!제작자 명령어
client.on("message", (Message) => {
  if (Message.content === "!제작자") {
    Message.reply("저를 만드신 분은 `Eclipse#5212` 님이에요!");
  }
});

  


client.on("message", (Message) => {
  if (Message.content === "!피에와") {
      Message.channel.send('**귀여운** 피에와이자 **이클립스의 여친**');
  }
});



client.on("message", (Message) => {
  if (Message.content === "!이클립스") {
      Message.channel.send('**잘생기고 완벽한** 고등학생이자 **피에와의 남친.**\n ~~버튜버를 좋아한다~~');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!마약") {
      Message.channel.send('**늘 심심한** 사람 ~~이자 많은 노예들의 주인~~');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!케인") {
      Message.channel.send('케인인님 코가크다 흐헤헤');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!얼불춤") {
      Message.channel.send('얼불춤은 **망겜**이에요');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!행인") {
      Message.channel.send('**피에와 집 근처에 거주하는** 사람');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!루나스") {
      Message.channel.send('**여기 뭐 넣을까요**');
  }
});


/*
client.on("message", (Message) =>{
  if (Message.content === "!요청") {
    Message.react("👌");
  }
});
*/



client.on("message", (Message) =>{
  if (Message.content === "띵킹") {
    Message.react("🤔");
  }
});



client.on("message", (Message) => {
  if (Message.content === "!귀여운 피에와") {
      Message.channel.send('**세상에서 가장 귀여운** 피에와');
  }
});


client.on("message", (Message) => {
  if (Message.content === "!유저명") {
    const embed = new Discord.MessageEmbed()
      .setTitle("유저명 리스트") // 1 - embed의 제목을 담당합니다.
      .setColor("bfff00") // 2 - embed 사이드 바의 색을 정합니다.
      .setDescription(
        "**!피에와**\n\n**!이클립스**\n\n**!마약**\n\n**!귀여운 피에와**\n\n**!행인**\n\n**!케인**\n\n**[추가 예정]**\n**[이클한테 넣어달라고 핑하면 넣어줌]**"
      ); // 3 - 실제로 설명을 담당하는 곳입니다.

    Message.channel.send(embed);
  }
});

   
client.on("message", (Message) => {
  if (Message.content === "!오조티타투") {
      Message.channel.send('**샌즈샌즈하고 섹시하고 맵 잘 만들고 유튜브 구독자 13명이고 얼불춤 잘하고 옵치 실버이고 롤 안하는** 오조티타투');
  }
});



client.on("message", (Message) =>{
  if (Message.content === "똥킹") {
    Message.react("<:thonking:857855138721955861>");
  }
});



client.on('message', (Message) => {
  if (Message.content === '샌즈') {
    Message.channel.send("<:sans:875151010367143936>");
  }
});


client.on('message', (Message) => {
  if (Message.content.startsWith('!노예')){
    let role = Message.guild.roles.cache.find(role => role.id === "882055350809923656");
    let member = Message.mentions.members.first();
    member.roles.add(role);
    Message.channel.send(`${member}에게 **노예** 역할이 지급되었습니다!`)
  }
});

client.on('message', (Message) => {
  if (Message.content.startsWith('!마법진 제작자')){
    let role = Message.guild.roles.cache.find(role => role.id === "897391910757494834");
    let member = Message.mentions.members.first();
    member.roles.add(role);
    Message.channel.send(`${member}에게 **마법진 제작자** 역할이 지급되었습니다!`)
  }
});


client.on('message', (Message) => {
  if (Message.content.startsWith('!작곡가')){
    let role = Message.guild.roles.cache.find(role => role.id === "892761827849678908");
    let member = Message.mentions.members.first();
    member.roles.add(role);
    Message.channel.send(`${member}에게 **작곡가** 역할이 지급되었습니다!`)
  }
});




//메시지 제거
client.on("message" , async Message => {

  if (Message.content.startsWith('!청소')){

      const args = Message.content.split(' ').slice(1);
      var amount = args.join(' ');
      amount = amount * 1
      amount = amount + 1

      if (!amount) return Message.reply('삭제할 메시지의 수를 입력하지 않았습니다!'); 
      if (isNaN(amount)) return Message.reply('삭제할 메시지의 수가 숫자가 아닙니다!'); 

      if (amount > 100) return Message.reply('한번에 100개 이상의 메시지는 삭제할 수 없습니다!'); 
      if (amount < 1) return Message.reply('최소 1개의 메시지를 삭제해야 합니다!'); 

    await Message.channel.messages.fetch({ limit: amount }).then(messages => {
      Message.channel.bulkDelete(messages)
      amount = amount - 1
      Message.channel.send(amount + "개의 메시지를 삭제했어요!")
    });
  }
});


client.login(process.env.TOKEN);
