exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte gib den Titel eines Songs an !`);

    client.player.play(message, args.join(" "));

};
