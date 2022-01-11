const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const List = require('./List');
module.exports = {
	name: 'join',
	async execute(interaction) {
		try {
			const recentEmbed = interaction.message.embeds[0];

			const maxNum = recentEmbed.title.split('/')[1];

			console.log('\nCONSOLE HERE!\nㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n');
			console.log(interaction);
			const list = new List(recentEmbed.description, maxNum);
			list.join(`<@${interaction.user.id}>`);

			const embed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle(`${list.count}명 대기중..`)
				.setDescription(list.printMembersAsMention().toString());
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
