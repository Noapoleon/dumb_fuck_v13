const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Replies with info about a user or server')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Info about a user')
				.addUserOption(option => option.setName('target').setDescription('The user')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('server')
				.setDescription('Info about the server')),
	async execute(interaction) {

		// treat subcommand user
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			// either give info about specified user or command caller
			if (user) {
				await interaction.reply(`User tag: ${user.tag}\nUser ID: ${user.id}`);
			}
			else {
				await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
			}
		}
		// treat subcommand server
		else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(`Server name: ${interaction.guild.name}\nServer ID: ${interaction.guild.id}\nServer creation date: ${interaction.guild.createdAt}`);
		}
	},
};