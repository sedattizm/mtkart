import {defineConfig} from 'astro/config';
// Public content is prerendered: no server or hydration runtime on the critical path.
// Deploy dist/ to Cloudflare Pages. A Worker is only needed for future protected/dynamic routes.
export default defineConfig({output:'static',compressHTML:true,build:{inlineStylesheets:'never'}});
