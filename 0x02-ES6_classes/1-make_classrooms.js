// Import ClassRoom from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Function to create an array of ClassRoom objects
export default function initializeRooms() {
	return [
		new ClassRoom(19),
		new ClassRoom(20),
		new ClassRoom(34)
	];
}
