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
  
      .setDescription(`**:battery: ���� ����� �������**
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
          message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });



	

	
	
	









client.on('message', message => {/// ���� ��� | Emoko#0001
     if (message.content === "$server-join") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// ���� ��� | Emoko#0001
  .addField("**!~[ ��� ������� ���� ������ ����� ���  ]~! **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// ���� ��� | Emoko#0001
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
      .setTitle(`!~[ ������� ������� ]~!`)
      .addField('??** ��� �������**',`[** __${msg.guild.region}__ **]`,true)
      .addField('??** __�����__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('??**__ ��� �������__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('??**__ ��� ������� ���������__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('??**__ ������� ��������__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('??**__ ����� �����__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('??**__ �������__**',`**${msg.guild.owner}**`,true)
      .addField('??**__ ���� �������__**',`**${msg.guild.id}**`,true)
      .addField('??**__ �� ��� ������� ��__**',msg.guild.createdAt.toLocaleString())
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
            .setTitle("**!~[ ������� ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});






client.on('message', Sal => { // By : !!!,RaaXe ? ,??
  if(Sal.content === '$bot-info') { //��� ���� ��������
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .addField('��� �����', client.user.username, true)
  .setFooter(client.user.tag, client.user.avatarURL, true)
  .addField('��� �����', client.user.discriminator, true)
  .addField('���� �����', client.user.id, true)
.addField('     ** ? ���� ����� ?  ** ' ,' **  !!!,RaaXe ? ,??#8352 ** ')
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
  if (msg.content === '��������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '���') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '�������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '��������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '����') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '�����') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '�����') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '���') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '�������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '����') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '���������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '�������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '������') {      
    msg.react("????")
    msg.channel.send("????")
  }
});

client.on('message', msg => {
  if (msg.content === '������') {      
    msg.react("??")
    msg.channel.send("??")
  }
});
client.on('message', msg => {
  if (msg.content === '�������') {      
    msg.react("??")
    msg.channel.send("����� �����")
  }
});











client.on('message', message => {
              var prefix = "$" ;
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('     **????????????? ?{?������� ������?}? ?????????????** ' ,' ** ** ')
.addField('     **? ������� ����� ?** ' ,' **$id** ')
.addField('     **? ���� ������� ����� ?**  ' ,' **$ping** ')
.addField('     **? ������ ��� ���� ����� ?**  ' ,' **$invite** ')
.addField('     **? ������� ����� ?** ' , '**$bot-info**') 
.addField('     **?������� ?** ' ,' **$avatar**')
.addField('     **? ����� �����?** ' , '**$date**')
.addField('     **? ������� ������� ? ** ' ,' **$server-info** ')
.addField('     **? ������ ���� ������� ? ** ' ,' **  $members  ** ')
.addField('     **? ������ ���� ��� �� ������� ? ** ' ,' **$hypixel** ')
.addField('     **? ������ ��� ���� �� ��� ? ** ' ,' **  $getid  ** ')
.addField('     **? ��� ������ ����� ���� �������� ? ** ' ,' **$top** ')
.addField('     **????????????? ?{?�������?}? ?????????????** ' ,' ** ** ')
.addField('     **? ������� ���� ����� ?  ** ' ,' **$angaz** ')
.addField('     ** ? ������ (����) �� ����� ?  ** ' ,' **$marry** ')
.addField('     ** ? ��� ��� ��� ?  ** ' ,' **  $rps ** ')
.addField('     **????????????? ?{?����� �������?}? ?????????????** ' ,' ** ** ')
.addField('     ** ? ������ ����� ���� ?  ** ' ,' **  $ban ** ')
.addField('     ** ? ����� ����� ���� ?  ** ' ,' **$mute** ')
.addField('     ** ? �� ������ �� ����� ?  ** ' ,' **  $unmute ** ')
.addField('     ** ? ��� ����� ?  ** ' ,' **  $clear ** ')
.addField('     ** ? ����� ����� ?  ** ' ,' **  $cl ** ')
.addField('     ** ? ��� ����� ?  ** ' ,' **  $op ** ')
.addField('     ** ? �������� ?  ** ' ,' **  $bc ** ')


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

message.channel.send('**�� ������� �� �����**');

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
  .addField("**��� ������ ����� ������ �������**")
     
     
     
  message.channel.sendEmbed(embed);
    }
});








  client.on('message', message => {
      if(message.content.startsWith ("$marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **���� ���� ��� ����**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **��� �� ����� ��� ���� ���� �� ���**').catch(console.error);
       if(proposed === message.author) return message.reply(`**���� � **`);
        if(proposed === client.user) return message.reply(`** ��� ������� **`);
              message.channel.send(`**${proposed} 
 ��� ����� ��� ������ �� ${message.author} 
 ����� ���� 15 �����  
 ����� ������ �� ��**`)

const filter = m => m.content.startsWith("������");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} � ${proposed} ��� ��� ����� ���� , ������ ������ �������** `);
})

   const filte = m => m.content.startsWith("��");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} �� ��� ����** `);
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
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**��� �� ���� ��������� ��������**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**��� ��� ������ �����**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**���� ���**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**��� �� ���� ���� ����� ���� �� ���� ����� ������ ������**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});


  
  
  

client.on('message', message => {
var prefix = "$"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`��� ���� �����[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``??? ���� ��� ����� ``",
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
    "���",
    "�����",
    "����",
    "�� ��",
    "�� ���"




  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" ����� ���� , ���� ����� �� ������ �� ��� ����� ���  ���� :angry: ").then(msg => {msg.delete(5000)});;
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

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__��� ���� �������__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__�� ����� �����__ ? **")
              });
                }

    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__��� ���� �������__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
                
              }).then(() => {
                  message.reply("**__�� ��� �����__?**")
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
            return message.channel.send('������ ����� ��� �������');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`�� ����� ������. [ ${ticket} ]`);
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
                                .setTitle('**����� �����.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('��� �������', args)
                                .addField('���� �������', message.author)
                                .addField('�����', `<#${message.channel.id}>`);

                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("�� ���� ���� ����� ������� �.")
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
            if (!args) return message.channel.send("**���� �� ���� �� ���� �����. ?**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });






























client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***��� �� ������ ��������***" ,member.user.username )
    .setDescription('***��� �� � ������ ����� �� ���� ���� ���� �������***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
var channel =member.guild.channels.find('name', '?-?���������������������')
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
    if(!message.channel.guild) return message.channel.send('**��� ����� ��� ���������**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**����� �� ����� ������** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "TG_Pro";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**��� ���� ����� ���� �� ���� ������ ����������**```');message.channel.send(`**�� ��� ����� �� ������ ���������ʿ \n����� ����������:** \` ${args}\``).then(msg => {
    msg.react('?')
    .then(() => msg.react('?'))
    .then(() =>msg.react('?'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`? | �� ... ����� ���������� ����� ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('��������')
       .addField('�����', message.guild.name)
       .addField('������', message.author.username)
       .addField('�������', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**�� ���� ����������.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });















client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.reply('? ���� ������� ����� ');
  }
});




client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
if(message.content.startsWith(prefix + 'ch')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("������� �����")
      .setColor("RANDOM")
      .setDescription(`���� ����� <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("��� ��", `${channel.createdAt}`)
      .addField("��� �����", `${channel.type}`)
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
  if(!message.channel.guild) return message.reply(`**__�� ����������__**`);
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
.addField('**����� ����� ��������**:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('**����� ����� �������**:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField("**����**", `${message.author.username}`)
.addField('**����**', message.author.discriminator)
.addField('**�����**', message.author.id)
 .addField('������������', message.guild.name)
.setFooter("��������")  
    message.channel.sendEmbed(id);
})
}       
});



client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** �� ���� ���� ����� 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** �� ���� ���� ������ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** ��� ���� ����� ��� �����**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('���������:', '$mute')
      .addField('���������:', '$unmute')
      .addField('�� ����:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('������:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** �� ���� ��� ����� Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. �� ����� ����� ����**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. �� ����� ����� ���� �����**").catch(console.error);
  });
    }
  
  };
  
  });

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** �� ���� ���� ����� 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** �� ���� ���� ���� ������ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** ��� ���� ����� ��� �����**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('���������:', '����/����')
      .addField('�� �� ������ ��:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('������:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** �� ���� ��� ����� Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. �� �� ������ �� ����� **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. �� �� ������ �� ����� **").catch(console.error);
  });
    }
  
  };
  
  });




client.login(process.env.BOT_TOKEN);