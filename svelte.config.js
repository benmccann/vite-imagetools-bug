import * as path from 'path';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [imagetools()],
			resolve: {
				alias: {
					$img: path.resolve('src/images')
				}
			}
		}
	}
};

export default config;
