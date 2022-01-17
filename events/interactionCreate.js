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
					content: '명령 수행중 오류가 발생했어요!',
					ephemeral: true,
				});
			}
		} else if (interaction.isButton()) {
			if (interaction.customId === 'join') {
				const listJoin = require('./interactionCreate/listJoin');
				listJoin.execute(interaction, client);
			} else if (interaction.customId === 'listExit') {
				const listExit = require('./interactionCreate/listExit');
				listExit.execute(interaction);
			}
		} else {
			return;
		}
	},
};
