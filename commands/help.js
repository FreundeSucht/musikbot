exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Help Commands' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
        },
    });

};
