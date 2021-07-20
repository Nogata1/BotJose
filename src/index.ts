import Discord from "discord.js";
import config from "../bot_credentials.json";

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

const prefix = ".";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift()?.toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Vamo ver se tu está lagado seu marginal ${timeTaken}ms.`);
  }
  if (command === "bestadc") {
    const ezImage = `https://i.pinimg.com/originals/a8/58/ff/a858ffe6645107ae8f97f09b7c173b8c.jpg`;
    message.reply(
      `Eu sou obviamente o melhor adc e explorador do mundo! ${ezImage}`
    );
  }
});
