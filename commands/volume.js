exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte wähle eine nummer !`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Bitte gib eine gültige Nummer (zwischen 1 und 100) ein !`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Lautstärke wurde auf **${args.join(" ")}%** eingestellt !`);

};
