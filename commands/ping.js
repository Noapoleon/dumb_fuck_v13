const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: '[Pong!](http://youtube.com)', ephemeral: true });
		await wait(5000);
		await interaction.editReply('Pong again');
	},
};