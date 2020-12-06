module.exports = (client, message, queue, track) => {

    message.channel.send(`${client.emotes.music} - ${track.title} hat sich in die Warteschlange eingeschleicht!`);

};