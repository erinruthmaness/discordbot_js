const fs = require("fs");
const { Collection } = require("discord.js");
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

const runCommand = (interaction) => {
    interaction.client.commands = new Collection();

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        // Set a new item in the Collection
        // With the key as the command name and the value as the exported module
        interaction.client.commands.set(command.data.name, command);
    }
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    (async () => {
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
    })();
};

module.exports = { runCommand };
