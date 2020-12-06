exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Derzeit wird keine Musik abgespielt !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Das Lied ${client.player.getQueue(message).playing.title} **wurde fortgesetzt** !`);

};
