module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Es wird gerade keine Musik abgespielt !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachchannel bitte verbinde dich mit einem Sprachchannel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ich kann dem Sprachannel nicht beitreten. Bitte überprüfe meine Berechtigungen !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Etwas ist schief gelaufen ... Fehler : ${error}`);
    };

};
