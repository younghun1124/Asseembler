module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('터미네이터', { type: 'WATCHING' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
