const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const List = require('./List');
module.exports = {
	name: 'join',
	async execute(interaction, client) {
		try {
			const recentEmbed = interaction.message.embeds[0];
			console.log('INTERACTION HERE!!!');
			console.log(interaction.message.interaction);
			const maxNum = recentEmbed.title.split('/')[1];
			console.log(maxNum);
			const list = new List(recentEmbed.description, maxNum);
			list.join(interaction.user.id);

			const embed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle(`${list.count}명 대기중..`)
				.setDescription(list.printMembersAsMention());
			await interaction.update({
				embeds: [embed],
			});
			const exitButton = new MessageActionRow().addComponents(
				new MessageButton()
					.setCustomId('listExit')
					.setLabel('빤쓰런하기')
					.setStyle('DANGER'),
			);
			if (1) {
				console.log('찼어요');
				console.log(list.member);
				for (const id of list.member) {
					const user = await client.users.fetch(id);
					user.send('모두 모였어요. assemble!');
				}
			}
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
