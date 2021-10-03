module.exports = {
	name: 'interactionCreate',
	execute(client) {
		client.on('interactionCreate', async interaction => {
			if (!interaction.isCommand) return;

			const command = client.commands.get(interaction.commandName);

			if (!command) return;
			if (command) return;

			try {
				await command.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ contents: 'There was an error while executing this command!', ephemeral: true });
			}
		});
	},
};
