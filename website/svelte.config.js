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
	  },

    preprocess: vitePreprocess()
};

export default config;
