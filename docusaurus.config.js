const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Books',
	tagline: 'Learning by Reading || 안녕하세요. 개발 서적을 읽고 기록하고 있습니다.',
	url: 'https://mnxmnz-books.vercel.app/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/icon.png',
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko'],
	},
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Books',
				logo: {
					alt: 'logo',
					src: 'img/icon.png',
				},
				items: [
					{
						href: 'https://github.com/mnxmnz',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://mnxmnz.github.io',
						label: 'Blog',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Books',
						items: [
							{
								label: 'UX 심리학',
								to: '/category/ux-심리학',
							},
							{
								label: '모던 자바스크립트 Deep Dive',
								to: '/category/모던-자바스크립트-deep-dive',
							},
							{
								label: '쉽게 배우는 운영체제',
								to: '/category/쉽게-배우는-운영체제',
							},
							{
								label: '이펙티브 타입스크립트',
								to: '/category/이펙티브-타입스크립트',
							},
							{
								label: '자바스크립트 완벽 가이드',
								to: '/category/자바스크립트-완벽-가이드',
							},
							{
								label: '함께 자라기',
								to: '/category/함께-자라기',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/mnxmnz',
							},
							{
								label: 'Blog',
								href: 'https://mnxmnz.github.io',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} 김민지 Built with Docusaurus`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
