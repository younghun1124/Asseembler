const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
	name: 'join',
	async execute(interaction) {
		try {
			const recentEmbed = interaction.message.embeds[0];
			const waitingNum = recentEmbed.description.match(/</g).length + 1;
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
			await interaction.update({
				embeds: [embed],
			});
			const exitButton = new MessageActionRow().addComponents(
				new MessageButton()
					.setCustomId('listExit')
					.setLabel('빤쓰런하기')
					.setStyle('DANGER'),
			);

			await interaction.followUp({
				content: '야호! 대기열에 등록했어요.',
				components: [exitButton],
				ephemeral: true,
			});
		} catch (error) {
			console.error(error);
		}
	},
};
