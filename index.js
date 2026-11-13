const fs = require('node:fs');
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Creates an object for our client (Bot)

// Runs arrow function once as soon as the listener checks that the bot is logged in and operational
client.once(Events.ClientReady, (readyClient) => {
    console.log(`${readyClient.user.username} is ready and operational`);
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandsFolder = fs.readdirSync(foldersPath);
for(const folder of commandsFolder){
    const commandsPath = path.join(foldersPath, folder)
    const commandsFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));
    for(const file of commandsFiles){
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if('data' in command && 'execute' in command){
            client.commands.set(command.data.name, command);
        } else{
            console.log(`[Warning]: ${filePath} is not valid as a slash command`);
        }
    }
}

client.on(Events.InteractionCreate, async (interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if(!command) {
        console.error(`No command matches ${interaction.commandName}`);
    }

    try{
        await command.execute(interaction);
    } catch(error){
        console.error(error);
                if (interaction.replied || Interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        flgas: MessageFlags.Ephemeral,
                    });
                } else {
                    await interaction.reply({
                        content: 'There was an error while executing this command',
                        flgas: MessageFlags.Ephemeral,
                    });
                }
            }
})

client.login(token);