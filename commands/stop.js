exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - Musik wurde auf diesem Server **gestoppt** !`);

};
