<script lang="ts">
	export let data
	import { formatDate } from '$lib/utils'
	import { ChevronLeft, BookOpen, ChevronDown } from 'lucide-svelte'
	import { createTableOfContents } from '@melt-ui/svelte'
	import Tree from './tree.svelte'
	import { onDestroy } from 'svelte'

	let tocHidden: boolean = false

	const openTOC = () => {
		tocHidden = !tocHidden
	}

	const updateTOCVisibility = () => {
		tocHidden = window.innerWidth <= 1024
	}
	window.addEventListener('resize', updateTOCVisibility)
	$: updateTOCVisibility()
	onDestroy(() => {
		window.removeEventListener('resize', updateTOCVisibility)
	})

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({
		selector: '#toc-builder-preview',
		activeType: 'all',
		scrollBehaviour: 'smooth',
		scrollFn: (id) => {
			const container = document.getElementById('toc-builder-preview')
			const element = document.getElementById(id)

			if (container && element) {
				container.scrollTo({
					top: element.offsetTop - container.offsetTop - 16,
					behavior: 'smooth'
				})
			}
		}
	})

	const customCodeBlock: string =
		'prose-pre:p-6 prose-pre:rounded-lg prose-pre:border prose-pre:border-zinc-500/20 dark:prose-pre:border-zinc-500/10 prose-pre:m-0'
	const captionClass: string =
		'prose-figcaption:m-0 prose-figcaption:px-2 prose-figcaption:py-1 prose-figure:m-0 prose-figure:relative prose-figure:mb-6 prose-figcaption:absolute prose-figcaption:right-0 prose-figcaption:m-4 prose-figcaption:select-none'
	const titles: string = 'prose-h2:mb-0'
</script>

<svelte:head>
	<title>{data.meta.title} | Mark-up!</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="relative flex flex-row-reverse items-stretch w-full gap-8 max-lg:flex-col">
	<div
		class="relative w-full min-h-full border-l max-w-64 border-zinc-500/20 max-lg:border-b max-lg:border-l-0 max-lg:max-w-full"
	>
		<div
			class="sticky top-0 flex flex-col items-start justify-start gap-2 pt-8 pl-6 max-lg:justify-self-end max-lg:px-4 max-lg:min-w-full max-lg:static max-lg:pb-4"
		>
			<span class="flex items-center justify-between w-full mb-2">
				<p
					class="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 max-lg:text-zinc-900 dark:max-lg:text-zinc-50"
				>
					<BookOpen size="14" />
					On This Page
				</p>
				<button
					on:click={openTOC}
					class="items-center justify-center hidden p-2 border rounded-lg max-lg:flex size-8 aspect-square border-zinc-500/20"
				>
					<ChevronDown size="14" class={`${tocHidden && 'rotate-180'}`} />
				</button>
			</span>
			{#if !tocHidden}
				<aside>
					{#key $headingsTree}
						<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
					{/key}
				</aside>
			{/if}
		</div>
	</div>
	<article class="w-full mx-8 mt-8 mb-20 max-lg:mb-8">
		<hgroup class="mb-4">
			<h1>{data.meta.title}</h1>
			<p class="text-sm opacity-70">Published at {formatDate(data.meta.date)}</p>
		</hgroup>
		<p>{data.meta.description}</p>

		<div class="flex items-center gap-2 mt-4">
			{#each data.meta.categories as tags}
				<span
					class="px-3 py-1 text-xs rounded-full cursor-pointer bg-gray-200/90 text-zinc-600 dark:text-zinc-400 dark:bg-zinc-800/50 hover:bg-zinc-200/100 dark:hover:bg-zinc-800/100"
					>&num;{tags}
				</span>
			{/each}
		</div>
		<hr class="mt-8 mb-12 dark:border-zinc-800 border-zinc-300" />

		<section
			id="toc-builder-preview"
			class={`max-w-full prose prose-zinc dark:prose-invert prose-hr:my-8 ${customCodeBlock} ${captionClass} ${titles}`}
		>
			<svelte:component this={data.content} />
		</section>
	</article>
</div>
