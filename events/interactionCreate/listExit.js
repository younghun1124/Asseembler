const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
module.exports = {
	name: 'listExit',
	async execute(interaction) {
		// const recentEmbed = interaction.message.embeds[0];
		// const waitingNum = recentEmbed.description.match(/</g).length + 1;
		// const maxNum = recentEmbed.title.split('/')[1];
		// const title = `대기 중..(${waitingNum}/${maxNum}`;
		// console.log('\nCONSOLE HERE!\nㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n');
		// console.log(interaction);
		// const embed = new MessageEmbed()
		// 	.setColor('#0099ff')
		// 	.setTitle(title)
		// 	.setDescription(
		// 		`${recentEmbed.description}\n<@${interaction.user.id}>\n`,
		// 	);
		await interaction.update({
			content: '무사히 도망쳤어요.',
			components: [],
		});
	},
};
