const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catordog')
		.setDescription('tell me if you prefer cats or dog')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('what animal u prefer lol')
				.setRequired(true)
				.addChoice('Cat', 'catto')
				.addChoice('Dog', 'doggo')),
	async execute(interaction) {
		await interaction.reply(`You prefer ${interaction.options.getString('category')}?? Weirdo...`);
	},
};