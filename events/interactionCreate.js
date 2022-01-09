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
			console.log(interaction);
			const filter = (i) => i.customId === 'primary';
			const collector =
				interaction.channel.createMessageComponentCollector({
					filter,
					time: 15000,
				});
			collector.on('collect', async (i) => {
				if (i.customId === 'primary') {
					await i.reply({
						content: 'A button was clicked!',
						ephemeral: true,
					});
				}
			});

			collector.on('end', (collected) =>
				console.log(`Collected ${collected.size} items`),
			);
		} else {
			return;
		}
	},
};
