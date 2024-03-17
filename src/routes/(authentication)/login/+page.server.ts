import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

        console.log(email, password)

		cookies.set('sessionid', "email", { path: '/' });

		throw redirect(302, "/settings")
	},
} satisfies Actions;