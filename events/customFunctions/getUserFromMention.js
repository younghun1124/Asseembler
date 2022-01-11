const {
	MessageMentions: { USERS_PATTERN },
} = require('discord.js');
module.exports = function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(USERS_PATTERN);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	return matches;
};
