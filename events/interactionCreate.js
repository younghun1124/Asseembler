const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	async execute(client, interaction) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'There was an error while executing this command!',
					ephemeral: true,
				});
			}
		} else if (interaction.isButton()) {
			if (interaction.customId === 'join') {
				const listJoin = require('./interactionCreate/listJoin');
				listJoin.execute(interaction);
			} else if (interaction.customId === 'listExit') {
				const listExit = require('./interactionCreate/listExit');
				listExit.execute(interaction);
			}
		} else {
			return;
		}
	},
};
