import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://miralkashiwagi.github.io',
	base: '/astro-starlight-test',
	integrations: [
		starlight({
			title: 'GSAP覚書',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Tween',
					autogenerate: { directory: 'tween' }
				},
				{
					label: 'Timeline',
					autogenerate: { directory: 'timeline' }
				},
				{
					label: 'ScrollTrigger',
					autogenerate: { directory: 'scrolltrigger' }
				},
			],
		}),
	],
});
