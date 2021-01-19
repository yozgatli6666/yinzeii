const db = require("quick.db");

exports.run = async(client, message, args) => {
    if (!args[0]) return await message.channel.send("Bir seçenek belirtin: `aç`, `kapat`");
    if (args[0] === "aç") {
        db.set(`kufur_koruma.${message.guild.id}`, true);
        await message.channel.send("Küfür koruması açıldı");
    }
    else if (args[0] === "kapat") {
        db.delete(`kufur_koruma.${message.guild.id}`);
        await message.channel.send("Küfür koruması kapatıldı");
    } 
    else return await message.channel.send("Geçerli bir seçenek belirtin: `aç`, `kapat`");
}


exports.config = {
  name: 'küfür-engel',
  aliases: []
};
