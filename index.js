const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Dubai', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('993245909079052369')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/5lifafr') //Must be a youtube video link 
    .setState('AbuDhabi')
    .setName('/anyy')
    .setDetails(`🎶 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1132087150557528187/1181569162993225778/makesweet-dy5k2l.gif?ex=65c22288&is=65afad88&hm=c772af10a98967e16a7a5b02cc6e5b7e4a5a01bb718ab63fb090eb82d697a4e8&=&width=440&height=330') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('khalifa') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1132087150557528187/1181569162993225778/makesweet-dy5k2l.gif?ex=65c22288&is=65afad88&hm=c772af10a98967e16a7a5b02cc6e5b7e4a5a01bb718ab63fb090eb82d697a4e8&=&width=440&height=330') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    addButton('@k', 'https://discord.gg/anyy')
    .addButton('@k', 'https://discord.gg/anyy');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `🎶 [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
