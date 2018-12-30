const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.login('NDk1NjMyNjQ0OTg2NjM0MjYw.DqToOw.c6m3YHtv9c5IxKEO8EtWf23xGg4');


client.on('ready',message => {
    console.log("bot stat: ON");
    client.user.setGame("-help | By SpeakZone");
});

client.on('message', message =>{
    if(message.content === "-invite"){
        message.channel.sendMessage('https://discord.gg/rd5xKWm');
        console.log('use_commande: invite');
    }
});

client.on('message', message =>{
    if(message.content === prefix + "SPL"){
        
        var sp_embed = new Discord.RichEmbed()

        .setColor("#0099FF")
        .setTitle("Liens SpeakZone")
        .setDescription("Voici les liens disponibles :")
        .addField("SpeakZone | FR :", "https://discord.gg/rd5xKWm")
        .addField("SpeakZone | EU :", "https://discord.gg/J8F762r")
        .addField("SpeakZone | Dev :", "https://discord.gg/tBgckm3")
        .setFooter("By SpeakZone")
        message.channel.sendMessage(sp_embed)
        console.log('use_commande: SpeakZone link')
    }    
});

client.on('message', message =>{
    if(message.content === "-site"){
        message.channel.sendMessage('Voici le site: https://speakzone.wixsite.com/speakzone');
        console.log('use_commande: link');
    }
});

client.on('message', message =>{
    if(message.content === prefix + "help"){
        
        var help_embed = new Discord.RichEmbed()

        .setColor("#0099FF")
        .setTitle("Liste des commandes")
        .setDescription("Voici les commandes disponibles :")
        .addField("-help", "Montre la liste des commandes")
        .addField("-SPL", "Donne les liens vers les autres serveurs SpeakZone")
        .addField("-invite", "Donne le liens d'invitation")
        .addField("-site", "Donne le liens vers le site de SpeakZone FR")
        .addField("-bot-info", "Donne les informations du bot")
        .setFooter("Menu d'aide")
        message.channel.sendMessage(help_embed)
        console.log('use_commande: help')
    }    
});

client.on('message', message =>{
    if(message.content === prefix + "bot-info"){
        
        var help_embed = new Discord.RichEmbed()

        .setColor("#0099FF")
        .setTitle("Liste des commandes")
        .setDescription("Voici les informations du BOT :")
        .addField("Nom :", "SpeakZone BOT")
        .addField("ID du bot :", "495632644986634260")
        .addField("Commande d'aide :", "-help")
        .addField("Createur(s)", "FryZe_")
        .setFooter("Bot - info")
        message.channel.sendMessage(help_embed)
        console.log('use_commande: bot-info')
    }    
});

client.on('guildMemberAdd', member =>{

    let embed = new Discord.RichEmbed()
    
    .setTitle("Informations :")
    .setColor("#0099FF")
    .setDescription('Bienvenue **' + member.user.username + 'Pour avoir accès au autres salons de **SpeakZone | FR** cliquez sur le like dans le salon #règles, Merci  !')
    .setFooter('Nous sommes désormais ' + member.guild.memberCount) 
    member.guild.channels.get('486931526399950898').send(embed)
});