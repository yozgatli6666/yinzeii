


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<a:furkan4:796785685695692861> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:furkan4:796785685695692861> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:furkan4:796785685695692861> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:furkan4:796785685695692861> **Bot Sahibi**  <@775241399683121193> \n  \n\n <a:furkan4:796785685695692861>\ **Bot Geliştiricisi**  <@783229943349772319> \n  \n\n <a:furkan4:796785685695692861> **Bot Sahibi**  <@775241399683121193> \n  \n`)
.addField("__**Sürümler**__", `<a:furkan4:796785685695692861> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:furkan4:796785685695692861> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:furkan4:796785685695692861> **${client.ws.ping}** ms`,true)
    .setImage(`https://cdn.discordapp.com/attachments/785585316168728656/796626930929106964/standard.gif`)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}