<script lang="ts">
	import { type TableOfContentsItem, type TableOfContentsElements, melt } from '@melt-ui/svelte'

	export let tree: TableOfContentsItem[] = []
	export let activeHeadingIdxs: number[]
	export let item: TableOfContentsElements['item']
	export let level = 1
</script>

<ul class="m-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class="pt-2 mt-0">
				<a
					href="#{heading.id}"
					use:melt={$item(heading.id)}
					class="inline-flex items-center justify-center gap-1 text-neutral-500 no-underline transition-colors
           hover:text-zinc-800 dark:hover:text-zinc-200 dark:data-[active]:text-zinc-50 data-[active]:text-zinc-950"
				>
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self tree={heading.children} level={level + 1} {activeHeadingIdxs} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>
