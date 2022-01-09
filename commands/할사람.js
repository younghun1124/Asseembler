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
		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId('primary')
				.setLabel('하면 하지~')
				.setStyle('PRIMARY'),
		);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		const game = interaction.options.getString('할것');
		const number = interaction.options.getInteger('인원수');
		console.log(interaction);
		return interaction.reply({
			content: `${interaction.user.username}님이 ${game}할 ${number}명을 찾아요`,
			embed: [embed],
			components: [row],
			ephemeral: false,
		});
	},
};
