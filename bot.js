const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
message.channel.send( :ballot_box_with_check: **| Done ... The Broadcast Message Has Been Sent For**${message.guild.members.filter(m => m.presence.status !== 'online').size}\`\`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : me`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : me ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`edgeee`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + "bcall")){
message.channel.sendMessage('Sending...')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
