import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Iyas Docs',
			social: {
				github: 'https://github.com/iyasbagus',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'start/started' },
						{ label: 'Manual Setup', slug: 'start/manual' },
						{ label: 'Environmental Impact', slug: 'start/enviroment' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Pages', slug: 'guides/pages' },
						{ label: 'Authoring Content in Markdown', slug: 'guides/authoring' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
