class Room {
	constructor(options) {
		this.id = options.id;
		this.name = options.name;
		this.host = options.host;
		this.users = options.users || [];
		this.points = options.points || 0;
		this.isReady = false;
	}
}

module.exports = Room;