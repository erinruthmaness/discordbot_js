const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Says hello back!"),
    async execute(interaction) {
        await interaction.reply("**AAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH!!!**");
    },
};
