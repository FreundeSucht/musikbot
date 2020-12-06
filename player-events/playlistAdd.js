module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} wurde zur Warteschlange hinzugefügt (**${playlist.items.length}** songs) !`);

};