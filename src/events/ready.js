const { ActivityType, EmbedBuilder } = require('discord.js');
const client = require('..');
const { fetch } = require('@tim0310/fetch');

client.on('ready', async () => {

    const activityList = [
        { name: `MelvyBot`, type: ActivityType.Watching }
    ];

    let i = 0;
    setInterval(() => {
        if (i >= activityList.length) i = 0;
        client.user.setActivity(activityList[i]);
        i++;
    }, 10000);

    console.log(`Client - Connected as ${client.user.tag}`);
});