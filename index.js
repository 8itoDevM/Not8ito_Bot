const { Client, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
    console.log(`${readyClient.user.username} is ready and operational`);
});

client.login(token);