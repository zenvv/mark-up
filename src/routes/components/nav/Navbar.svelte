<script lang="ts">
	import { page } from '$app/stores'
	import { ChevronLeft, NotebookPen } from 'lucide-svelte'
	import NavButton from './NavButton.svelte'
	import ToggleTheme from './ToggleTheme.svelte'
</script>

<nav class="fixed top-0 z-50 w-full h-16 bg-zinc-100 dark:bg-zinc-950">
	<div
		class="flex items-center justify-between w-full max-w-6xl p-4 mx-auto border-b dark:border-zinc-800/50 border-zinc-300/50 max-lg:px-6"
	>
		<span class="flex items-center gap-3">
			{#if $page.url.pathname !== '/'}
				<span class="mr-3">
					<a
						href="/"
						class="flex items-center justify-center p-2 text-xs transition-all border rounded-lg dark:border-zinc-300/15 border-zinc-800/20 aspect-square size-8 dark:hover:bg-zinc-500/20 dark:active:bg-zinc-500/50 dark:text-zinc-300 dark:hover:text-zinc-50 hover:bg-zinc-400/20 active:bg-zinc-400/50 text-zinc-700 hover:text-zinc-900"
					>
						<ChevronLeft size="14" />
					</a>
				</span>
			{/if}

			<a href="/">
				<p
					class="flex items-center gap-2 text-lg font-semibold transition-opacity cursor-pointer select-none w-[110px] hover:opacity-80"
				>
					<NotebookPen size="18" /> Mark-up!
				</p>
			</a>
			{#if $page.url.pathname !== '/'}
				<span class="text-sm font-semibold tracking-wide opacity-60 max-lg:hidden"
					>{$page.url.pathname}</span
				>
			{/if}
		</span>
		<span>
			<ToggleTheme />
		</span>
	</div>
</nav>
