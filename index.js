//----DiscordJS----
const Discord = require("discord.js");
const bot = new Discord.Client
const config = require("./config.json")
require("dotenv").config();

bot.on("ready", () => {
    console.log("I'm ready !");
});

bot.login(process.env.BOT_TOKEN);

//----Connection----
bot.login(config.token)

//----Bienvenue & AutoRole----
bot.on("guildMemberAdd", member => {
    member.send("Tu est officiellement NOIR");
    bot.channels.cache.get("850103710067720295").send("Bienvenue EnfantNoir ${member.user.username}!");
    member.roles.add("850780940493651998");
})

//----Clear----
bot.on("message", message => {

    if (message.content.startsWith("!clear")) {
        message.delete();
        if (message.member.hasPermission("MANAGE_MESSAGES")) {

            let args = message.content.trim().split(/ +/g);

            if (args[1]) {
                if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Vous avez supprimé ${args[1]} message(s)`)

                } else {
                    message.channel.send(`Indiquer une valeur entre 1 et 99 !`)
                }
            } else {
                message.channel.send(`Indiquer une valeur pour éxécuter la commande de Clear !`)
            }
        } else {
            message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter la commande de Clear !`)
        }
    }
})