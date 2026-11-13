const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('answers pong back!'),
    async execute(interaction){
        await interaction.reply(`Pong!`);
    },
};