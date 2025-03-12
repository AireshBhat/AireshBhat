interface SiteConfig {
	site: string
	base: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://aireshbhat.github.io', // Write here your website url
	base: '/AireshBhat',
	author: 'Airesh Bhat', // Site author
	title: 'An Integral Human', // Site title.
	description:
		'A blog site containing articles about myself, my thoughts and research on Web3 and the philosophy I follow, a.k.a Integral Humanism', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
