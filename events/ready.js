module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		// When the client is ready run this code (only once)
		client.once('ready', () => {
			console.log(`Logged in as "${client.user.tag}" and ready to cum!`);
		});
	},
};
