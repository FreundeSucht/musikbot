exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            fields: [
                { name: 'Channel', value: track.author, inline: true },
                { name: 'Angefordert von', value: track.requestedBy.username, inline: true },
                { name: 'Aus der Wiedergabeliste', value: track.fromPlaylist ? 'Ja' : 'Nein', inline: true },

                { name: 'Aufrufe', value: track.views, inline: true },
                { name: 'Dauer', value: track.duration, inline: true },

                { name: 'Fortschrittsbalken', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
