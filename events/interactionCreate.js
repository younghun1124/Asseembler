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
			try {
				const recentEmbed = interaction.message.embeds[0];
				const waitingNum =
					recentEmbed.description.match(/</g).length + 1;
				const maxNum = recentEmbed.title.split('/')[1];
				const title = `대기 중..(${waitingNum}/${maxNum}`;
				console.log('\nCONSOLE HERE!\nㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n');
				console.log(interaction);
				const embed = new MessageEmbed()
					.setColor('#0099ff')
					.setTitle(title)
					.setDescription(
						`${recentEmbed.description}\n<@${interaction.user.id}>\n`,
					);
				interaction.update({
					embeds: [embed],
				});
			} catch (error) {
				console.error(error);
			}
		} else {
			return;
		}
	},
};
