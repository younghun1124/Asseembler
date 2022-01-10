const { MessageEmbed } = require('discord.js');

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
			const recentEmbed = interaction.message.embeds[0].description;
			console.log('\nCONSOLE HERE!\nㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n');
			console.log(interaction);
			const embed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle('대기 중..(1/5)')
				.setDescription(`${recentEmbed}\n<@${interaction.user.id}>\n`);
			interaction.update({
				embeds: [embed],
			});
		} else {
			return;
		}
	},
};
