export type User = {
	id: number;
	name: string;
	email: string;
	description: string;
};

export const greetUser = (user: User) => {
	return `Hello ${user.name}!`;
};
