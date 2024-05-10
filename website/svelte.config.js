import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		adapter: adapter({
		  pages: "dist",
		  assets: "dist",
		  fallback: null,
		  precompress: false,
		  strict: true,
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path.includes('/blog/') ) {
					return;
				}
				throw new Error(message);
			}
		}
	  },

    preprocess: vitePreprocess()
};

export default config;
