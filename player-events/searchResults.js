module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Hier sind Ihre Suchergebnisse für ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};