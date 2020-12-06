exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Derzeit werden keine Songs abgespielt !`);

    message.channel.send(`**Serverwarteschlange - ${message.guild.name} ${client.emotes.queue}**\nAktuell : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (angefordert von : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Und **${queue.tracks.length - 5}** andere Lieder ...` : `In der Wiedergabeliste **${queue.tracks.length}** Lied(er)...`}`));

};
