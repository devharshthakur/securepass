export async function handle({ event, resolve }) {
	return resolve(event, {
		preload: ({ type }) => type == 'font'
	});
}
