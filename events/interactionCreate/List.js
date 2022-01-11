const getUserFromMention = require('../customFunctions/getUserFromMention');
module.exports = class List {
	constructor(listMsg, maxNum) {
		this.maxNum = maxNum;

		this.member = new Set(getUserFromMention(listMsg));

		this.countMember();
	}
	countMember() {
		this.count = this.member.size;
	}

	join(id) {
		this.member.add(`<@${id}>`);
		this.countMember();
	}
	exit(id) {
		this.member.delete(`<@${id}>`);
		this.countMember();
	}
	printMembersAsMention() {
		if (this.member.size === 0) {
			return null;
		}
		const reducer = (previousValue, currentValue) =>
			`${previousValue}\n${currentValue}`;
		return [...this.member].reduce(reducer).toString();
	}
};
