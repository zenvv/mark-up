export type Categories = 'sveltekit' | 'svelte' | 'markdown' | 'technology' | 'frontend' | 'webdev' | 'operating-systems' | 'pets' | 'animal-behavior' | 'contact' | 'feedback' | 'communication'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
