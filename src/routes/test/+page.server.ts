import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		randomNumber: Math.round(Math.random() * 1000)
	};
}) satisfies PageServerLoad;
