 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Yinzeii Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:furkan4:796785685695692861> Yinzeii botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:furkan2:796786508731777055> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:furkan2:796786508731777055> \`${prefix}moderasyon\` `,true)
.addField(`__Müzik Komutları__`,`<a:furkan2:796786508731777055> \`${prefix}müzik\` `,true)
.addField(`__Prefix Değiştir__`,`<a:furkan2:796786508731777055> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:furkan3:796785832643919973> \`${prefix}davet\` | Yinzeii'yi Sunucunuza Davet Edersiniz\n<a:furkan3:796785832643919973> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:furkan3:796785832643919973> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/785585316168728656/796626930929106964/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}