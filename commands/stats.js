const { MessageEmbed } = require('discord.js');
const { platform, arch, cpus } = require('os');

module.exports.run = async (bot, message, args) => {

 const model = cpus()[0].model + " " + arch(),
       tanggal_buat = require('ms')(bot.user.createdAt());

 const embed = new MessageEmbed()
 .setColor('RANDOM') // RANDOM HEX COLOR
 .setTitle('Statistics Bot')
 .setThumbnail(bot.user.displayAvatarURL())
 .addField('💻 Robot', `
 Username: ${bot.user.username}
 Tanggal dibuat: ${tanggal_buat}
 `)
 .addField('🔍 System', `
 CPU : ${model}
 Platform : ${platform()}
 Websocket : ${bot.ws.ping} ms(miliseconds)
 `)
 .setFooter('© Client-Developer', bot.user.displayAvatarURL());

 message.channel.send(embed);

};
