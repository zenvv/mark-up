<script lang="ts">
	import { page } from '$app/stores'
	import { NotebookPen } from 'lucide-svelte'
	import NavButton from './NavButton.svelte'
	import ToggleTheme from './ToggleTheme.svelte'
</script>

<nav class="fixed top-0 z-50 w-full backdrop-blur-xl">
	<div
		class="flex items-center justify-between w-full max-w-6xl p-4 mx-auto border-b dark:border-zinc-800/50 border-zinc-300/50 max-md:flex-col max-md:gap-6 max-lg:px-8"
	>
		<span class="flex items-center gap-4">
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
		<span class="flex items-center justify-center gap-4 max-md:justify-between max-md:w-full">
			<span class="flex items-center justify-center gap-3">
				<NavButton href="/" name="Home" />
				<NavButton href="/about" name="About" />
				<NavButton href="/contact" name="Contact" />
			</span>
			<span>
				<ToggleTheme />
			</span>
		</span>
	</div>
</nav>
