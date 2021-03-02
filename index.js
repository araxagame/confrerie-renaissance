const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Je suis connecté !');
  });

client.on('message', message => {
    if (message.content === 'w.ping') {
      const timeTaken = Date.now() - message.createdTimestamp;
      const pingEmbed = new Discord.MessageEmbed()
        .setColor('#DE733D')
        .setTitle(':ping_pong:')
        .setThumbnail('https://cdn.discordapp.com/attachments/804437206386999376/805100659116081212/image0.jpg')
        .setDescription(`Pong! Le bot à une latence de **${timeTaken}** ms`);

    message.channel.send(pingEmbed);
    }
  });

client.on('message', message => {
    if (message.content === 'w.help') {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#DE733D')
        .setTitle("Page d'aide")
        .setThumbnail('https://cdn.discordapp.com/attachments/804437206386999376/805100659116081212/image0.jpg')
        .setDescription('Voici la Liste de mes capacitées')
        .addFields(
            { name: '__Ping !__', value:'```La commande est : w.ping ```'},
            { name: '__Info Serveur__', value:'```La commande est : w.serveur```'},
            { name: '__PUB__', value:'```La commande est : w.pub```'},

        );

    message.channel.send(helpEmbed);
    }
});

client.on('message', message => {
    if (message.content === 'w.serveur') {
        const serveurEmbed = new Discord.MessageEmbed()
        .setColor('#DE733D')
        .setTitle('Info Serveur !')
        .setThumbnail('https://cdn.discordapp.com/attachments/804437206386999376/805100659116081212/image0.jpg')
        .setDescription(`Vous êtes sur: ${message.guild.name}\nNombres de Membres: ${message.guild.memberCount}`);

    message.channel.send(serveurEmbed);
    }
})

client.login(process.env.TOKEN);