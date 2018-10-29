const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
}); 









client.on('message', message => {
var prefix = "$"
    if(message.content.startsWith (prefix  + 'members')) {
        if(!message.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.username, message.author.avatarURL) 
  
      .setDescription(`**:battery: ÍÇáÉ ÇÚÖÇÁ ÇáÓíÑİÑ**
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
          message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });



	

	
	
	









client.on('message', message => {/// ÇáİÇ ßæÏ | Emoko#0001
     if (message.content === "$server-join") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// ÇáİÇ ßæÏ | Emoko#0001
  .addField("**!~[ ÚÏÏ ÇáÓíÑİÑ ÇáÊí íÊæÇÌÏ ÇáÈæÊ ÈåÇ  ]~! **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// ÇáİÇ ßæÏ | Emoko#0001
});





  

client.on('ready', () => {
     client.user.setActivity(" $help  ",{type: 'WATCHING'})

});






 client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 1 ;

});




      


























client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server-info')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`!~[ ãÚáæãÇÊ ÇáÓíÑİÑ ]~!`)
      .addField('??** äæÚ ÇáÓíÑİÑ**',`[** __${msg.guild.region}__ **]`,true)
      .addField('??** __ÇáÑÊÈ__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('??**__ ÚÏÏ ÇáÇÚÖÇÁ__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('??**__ ÚÏÏ ÇáÇÚÖÇÁ ÇáÇæäáÇíä__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('??**__ ÇáÑæãÇÊ ÇáßÊÇÈíÉ__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('??**__ ÑæãÇÊ ÇáÕæÊ__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('??**__ ÇáÃæäÜÑ__**',`**${msg.guild.owner}**`,true)
      .addField('??**__ ÇíÏí ÇáÓíÑİÑ__**',`**${msg.guild.id}**`,true)
      .addField('??**__ Êã Úãá ÇáÓíÑİÑ İí__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });







client.on('message', message => {
var prefix = "$";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!~[ ÇáÊÇÑíÎ ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});






client.on('message', Sal => { // By : !!!,RaaXe ? ,??
  if(Sal.content === '$bot-info') { //åäÇ ÊÛíÑ ÇáÈÑİíßÓ
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('ÇÓã ÇáÈæÊ', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('ÊÇŞ ÇáÈæÊ', client.user.discriminator, true)
  .addField('ÇíÏí ÇáÈæÊ', client.user.id, true)
.addField('     ** ? ÕÇÍÈ ÇáÈæÊ ?  ** ' ,' **  !!!,RaaXe ? ,??#8352 ** ')
  Sal.channel.sendEmbed(embed);
}
});





client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', msg => {
  if (msg.content === 'ÇáÓÚæÏíÉ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ãÕÑ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáãÛÑÈ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáÚÑÇŞ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáÌÒÇÆÑ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáÇãÇÑÇÊ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÊæäÓ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÓæÑíÇ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'áíÈíÇ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ŞØÑ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáÕæãÇá') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÚãÇä') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ãæÑíÊÇäíÇ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'İáÓØíä') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáÈÍÑíä') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇãÑíßÇ') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === 'ÇáßÚÈÉ') {      
    msg.react("??")
    msg.channel.send("??")
  }
});
client.on('message', msg => {
  if (msg.content === 'ÇÓÑÇÆíá') {      
    msg.react("??")
    msg.channel.send("ÇáÔíÊ íÑÌÇá")
  }
});











client.on('message', message => {
              var prefix = "$" ;
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **????????????? ?{?ÇáÇæÇãÑ ÇáÚÇãÉ?}? ?????????????** ' ,' ** ** ')
.addField('     **? ãÚáæãÇÊ ÍÓÇÈß ?** ' ,' **$id** ')
.addField('     **? ÓÑÚÉ ÇÓÊÌÇÈÉ ÇáÈæÊ ?**  ' ,' **$ping** ')
.addField('     **? ááÍÕæá Úáí ÑÇÈØ ÇáÈæÊ ?**  ' ,' **$invite** ')
.addField('     **? ãÚáæãÇÊ ÇáÈæÊ ?** ' , '**$bot-info**') 
.addField('     **?ÇáÇİÊÇÑ ?** ' ,' **$avatar**')
.addField('     **? ÊÇÑíÎ Çáíæã?** ' , '**$date**')
.addField('     **? ãÚáæãÇÊ ÇáÓíÑİÑ ? ** ' ,' **$server-info** ')
.addField('     **? áãÚÑİÉ ÍÇáÉ ÇáÇÚÖÇÁ ? ** ' ,' **  $members  ** ')
.addField('     **? áãÚÑİÉ ÇíÏí ÔÎÕ İí åÇíÈßÓá ? ** ' ,' **$hypixel** ')
.addField('     **? ááÍÕæá Úáí ÇíÏí Çí ÔÎÕ ? ** ' ,' **  $getid  ** ')
.addField('     **? ÊæÈ ÇäİÇíÊ íæÑíß ÑÇÈØ ÇáÇäİÇíÊ ? ** ' ,' **$top** ')
.addField('     **????????????? ?{?ÇáÇáÚÇÈ?}? ?????????????** ' ,' ** ** ')
.addField('     **? ÇäÌÇÒÇÊ ãÇíä ßÑÇİÊ ?  ** ' ,' **$angaz** ')
.addField('     ** ? ÇáÒæÇÌ (ãÒÍÉ) ãä ÇáÔÎÕ ?  ** ' ,' **$marry** ')
.addField('     ** ? ÍÌÑ æÑŞ ãŞÕ ?  ** ' ,' **  $rps ** ')
.addField('     **????????????? ?{?ÇæÇãÑ ÇáÇÏÇÑÉ?}? ?????????????** ' ,' ** ** ')
.addField('     ** ? ÇÚÚØÇÁ ÇáÚÖæ ÈÇäÏ ?  ** ' ,' **  $ban ** ')
.addField('     ** ? ÇÚØÇÁ ÇáÚÖæ ãíæÊ ?  ** ' ,' **$mute** ')
.addField('     ** ? İß ÇáãíæÊ Úä ÇáÚÖæ ?  ** ' ,' **  $unmute ** ')
.addField('     ** ? ãÓÍ ÇáÔÇÊ ?  ** ' ,' **  $clear ** ')
.addField('     ** ? ÊŞİíá ÇáÔÇÊ ?  ** ' ,' **  $cl ** ')
.addField('     ** ? İÊÍ ÇáÔÇÊ ?  ** ' ,' **  $op ** ')
.addField('     ** ? ÈÑæÏßÇÓÊ ?  ** ' ,' **  $bc ** ')


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});





  






client.on("message", async message => {
	var prefix = "$"
    if (message.content.startsWith(prefix + "angaz")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});






  client.on('message', message => {
	  var prefix = "$"
    if (message.author.bot) return;
     if (message.content === prefix + "bot-owner") {


 message.author.sendMessage(`
 
__TG_Pro__
Created By : ??Pro - ? M3roof#5981
bot link : https://discordapp.com/oauth2/authorize?client_id=496501749926854657&scope=bot&permissions=388160
`);

message.channel.send('**Êã ÇáÇÑÓÇá İí ÇáÎÇÕ**');

    }
});
  






client.on('message', message => {
	var prefix = "$"
if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});


client.on('message', message => {
     if (message.content === "$invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("**ÊÜã ÇÑÓÜÃá ÑÇÈÜØ ÇáÈÜæÊ ÈÇáÎÜÃÕ**")
     
     
     
  message.channel.sendEmbed(embed);
    }
});








  client.on('message', message => {
      if(message.content.startsWith ("$marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **áÇÒã ÊØáÈ ÇíÏ æÍÏÉ**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **æáÏ ãÇ íÕÍáß ÇáÇ ÍÑãÉ æÍÏÉ ßá ãÑÉ**').catch(console.error);
       if(proposed === message.author) return message.reply(`**ÎäËì ¿ **`);
        if(proposed === client.user) return message.reply(`** ÊÈí ÊÊÒæÌäí¿ **`);
              message.channel.send(`**${proposed} 
 ÈÏß ÊŞÈáí ÚÑÖ ÇáÒæÇÌ ãä ${message.author} 
 ÇáÚÑÖ áãÏÉ 15 ËÇäíÉ  
 ÇßÊÈí ãæÇİŞÉ Çæ áÇ**`)

const filter = m => m.content.startsWith("ãæÇİŞÉ");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} æ ${proposed} Çáİ Çáİ ãÈÑæß Çááå , íÑÒŞßã ÇáĞÑíÉ ÇáÕÇáÍÉ** `);
})

   const filte = m => m.content.startsWith("áÇ");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} Êã ÑİÖ ÚÑÖß** `);
})
        
  }
});
  






  
    client.on('message', message => {
		var prefix = "$"
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**ÇäÊ áÇ Êãáß ÇáÕáÇÍíÇÊ ÇáãØáæÈå**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**áíÓ áÏí ÕáÇÍíÉ ÇáÍÙÑ**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**íÌÈ Çä Êßæä ÑÊÈÉ ÇáÈæÊ ÇÚáí ãä ÑÊÈå ÇáÔÎÕ ÇáãÑÇÏ ÊÈäíÏÉ**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});


  
  
  

client.on('message', message => {
var prefix = "$"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`áíÓ áÏíß ÈÑãÔä[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``??? ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
  

  
  
  
  

  
  
  
  
  
  
  
  
client.on("message",function(message) {
	var prefix = "$"
    if(message.content.startsWith(prefix + 'uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | TG_Pro  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("  TG_Pro |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});
  
  
  
  
  


    
  
  
  
  
  
  
  

  
  
  
  
  
  
  
const bannedwords = [
    "ßáÈ",
    "ÍíæÇä",
    "ãÚİä",
    "ßá ÒŞ",
    "ßá ÊÈä"




  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" ÇÍÊÑã äİÓß , íãäÚ ÇáÔÊã İí ÎÇÏãäÇ Çæ Óæİ ÊÊÚÑÖ Çáí  ãíæÊ :angry: ").then(msg => {msg.delete(5000)});;
  };
});
  
  
  
  
  
  
  
  
  client.on("message", function(message) {
	  var prefix = "$"
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

  
  
  
  

  
  




  

  
  
  

  
  
  
  
  
  
  
  

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__Êã ÊŞİíá ÇáÔÇÊ__ ? **")
              });
                }

    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
                
              }).then(() => {
                  message.reply("**__Êã İÊÍ ÇáÔÇÊ__?**")
              });
    }
       
});
  

  
  
  
  

  

client.on('message', message => {
 var prefix = "$"
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('ÇáÑÌÇÁ ßÊÇÈÉ ÓÈÈ ÇáÊĞßÑÉ');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`Êã ÇäÔÇÁ ÊĞßÑÊß. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**ÊĞßÑÉ ÌÏíÏÉ.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('ÓÈÈ ÇáÊĞßÑÉ', args)
                                .addField('ÕÇÍÈ ÇáÊĞßÑÉ', message.author)
                                .addField('ÇáÑæã', `<#${message.channel.id}>`);

                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("åá ÊÑíÏ İÚáÂ ÇÛáÇŞ ÇáÊĞßÑÉ ¿.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {

                    
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                    
                            
                        })


                    })


            
    }
});










client.on('message', message => {
var prefix = "$"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**ÑÌÃÁ ÖÚ ÇÓãß İí ãÇíä ßÑÇİÊ. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });






























client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***ÔßÑ áÜ ÇäÖÇãß áÓíÑİÑäÇ***" ,member.user.username )
    .setDescription('***Èßá ÍÈ æ ÇÍÊÑÇã äÊãäÇ Çä ÊŞÖí ãÚäÇ ÇİÖá ÇáÇæŞÇÊ***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
var channel =member.guild.channels.find('name', '?-?ÇáÜÜÜÊÜÜÜÑÍÜÜÜíÜÜÜÜÜÈ')
if (!channel) return;
channel.send({embed : embed});
});

















client.on('message', message => {
    let prefix = '$';
    
    if(message.content.startsWith(prefix + 'getid')) {
        let mentionned = message.mentions.users.first();
            if(mentionned) {
                var c = mentionned;
            } else {
                var c = message.author;
            }
                let embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle(`**[ ${c.id} ]**`);

                    message.channel.sendEmbed(embed);

    }
});







client.on("ready", () => {
  function lol() {
    client.guilds.get('501459185423220804').roles.find("name", "Rainbow").setColor("RANDOM");
    client.guilds.get('501459185423220804').roles.find("name", "?Fox_inviter?").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});

































client.on('message',message =>{
    var prefix = "$";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.pg.sa/lFH0WqPxp2.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });





client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "TG_Pro";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**```');message.channel.send(`**åá ÃäÊ ãÊÃßÏ ãä ÅÑÓÇáß ÇáÈÑæÏßÇÓÊ¿ \nãÍÊæì ÇáÈÑæÏßÇÓÊ:** \` ${args}\``).then(msg => {
    msg.react('?')
    .then(() => msg.react('?'))
    .then(() =>msg.react('?'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`? | Êã ... ÇÑÓÇá ÇáÈÑæÏßÇÓÊ ÈäÌÇÍ ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('ÈÑæÏßÇÓÊ')
       .addField('ÓíÑİÑ', message.guild.name)
       .addField('ÇáãÑÓá', message.author.username)
       .addField('ÇáÑÓÇáÉ', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Êã ÇáÛÇ ÇáÈÑæÏßÇÓÊ.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });















client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.reply('? ÓÑÚÉ ÇÓÊÌÇÈÉ ÇáÈæÊ ');
  }
});




client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("ãÚáæãÇÊ ÇáÑæã")
      .setColor("RANDOM")
      .setDescription(`ÇíÏí ÇáÑæã <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("ÕäÚ İí", `${channel.createdAt}`)
      .addField("äæÚ ÇáÑæã", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });














	var moment = require("moment");
client.on('message', message => {
if(message.author.bot) return;
  var prefix = '$';
  
  if (message.content.startsWith(prefix + "id")) {
      message.react("??") 
  if(!message.channel.guild) return message.reply(`**__ÈÓ ÈÇáÓíÑİÑÇÊ__**`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('**ÊÇÑíÎ ÏÎæáß ÇáÏÓßæÑÏ**:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('**ÊÇÑíÎ ÏÎæáß ÇáÓíÑİÑ**:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("**ÇÓãß**", `${message.author.username}`)
.addField('**ÊÇŞß**', message.author.discriminator)
.addField('**ÇíÏíß**', message.author.id)
 .addField('ÇáÜÓÜíÜÑİÜÜÑ', message.guild.name)
.setFooter("ãÚáæãÇÊß")  
    message.channel.sendEmbed(id);
})
}       
});



client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ãäÔäÊ ÔÎÕ ÇæáÇğ**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ÇáÃÓÊÚãÇá:', '$mute')
      .addField('ÇáÃÓÊÚãÇá:', '$unmute')
      .addField('Êã ãíæÊ:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Êã ÇÚØÇÁ ÇáÚÖæ ãíæÊ**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Êã ÇÚØÇÁ ÇáÚÖæ ãíæÊ ßÊÇÈí**").catch(console.error);
  });
    }
  
  };
  
  });

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** áÇ íæÌÏ áÏíß ÑÊÈå ÇáãíæÊ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ãäÔäÊ ÔÎÕ ÇæáÇğ**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ÇáÃÓÊÚãÇá:', 'ÇÓßÊ/ÇÍßí')
      .addField('Êã İß ÇáãíæÊ Úä:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Êã İß ÇáãíæÊ Úä ÇáÔÎÕ **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Êã İß ÇáãíæÊ Úä ÇáÔÎÕ **").catch(console.error);
  });
    }
  
  };
  
  });




client.login(process.env.BOT_TOKEN);