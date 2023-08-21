import { Client, Events, ErrorEvent } from 'discord.js';

export default {
	event: Events.Error,
	once: true,
	execute(error: ErrorEvent) {
		console.error(`Error: ${error.message}`);
	},
};