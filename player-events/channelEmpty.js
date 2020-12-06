module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Die Musik wurde gestoppt, da sich kein User mehr im Sprachannel befindet !`);

};