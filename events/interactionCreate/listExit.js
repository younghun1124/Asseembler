const { MessageEmbed } = require('discord.js');
const List = require('./List');
module.exports = {
	name: 'listExit',
	async execute(interaction) {
		try {
			// console.log('!!!!!!!!!!!!!인터렉션 채널!!!!!!!!!!!1');
			// console.log(interaction.user.id);
			const rootMsg = await interaction.channel.messages.fetch(
				interaction.message.reference.messageId,
			);
			const list = new List(rootMsg.embeds[0].description);
			list.exit(interaction.user.id);
			// console.log('리스트입니다' + list);
			console.log(list.printMembersAsMention());
			const embed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle(`${list.count}명 대기중..`)
				.setDescription(list.printMembersAsMention().toString());

			await rootMsg.edit({ embeds: [embed] });
			await interaction.update({
				content: '무사히 도망쳤어요.',
				components: [],
			});
		} catch (error) {
			console.log(error);
		}
	},
};
