const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('할사람')
		.setDescription('뭔가 할 사람을 모읍니다')
		.addStringOption((option) =>
			option
				.setName('할것')
				.setDescription('뭘 할지 적어주세요')
				.setRequired(true),
		)
		.addIntegerOption((option) =>
			option
				.setName('인원수')
				.setDescription('몇명이 필요한가요')
				.setMinValue(1)
				.setRequired(true),
		),
	async execute(interaction) {
		const game = interaction.options.getString('할것');
		const number = interaction.options.getInteger('인원수');

		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId('join')
				.setLabel('하면 하지~')
				.setStyle('PRIMARY'),
		);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('1명 대기중..')
			.setDescription(`<@${interaction.user.id}>\n`);

		console.log(interaction);
		return interaction.reply({
			content: `${interaction.user.username}님이 ${game}할 ${number}명을 찾아요.`,
			embeds: [embed],
			components: [row],
			ephemeral: false,
		});
	},
};
