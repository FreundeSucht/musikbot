module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Du musst eine gültige Nummer zwischen **1** und **${tracks.length}** senden !`);

};