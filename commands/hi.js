const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hi")
        .setDescription("Says hi back!"),
    async execute(interaction) {
        await interaction.reply("AAAAAAAAAAHHHHHHHHHHHHHHH!");
    },
};
