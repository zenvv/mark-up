<script lang="ts">
	import { page } from '$app/stores'

	export let href: string
	export let name: string
</script>

<a {href} class="nav-button" class:active={$page.url.pathname === href}>{name}</a>

<style lang="postcss">
	.nav-button {
		@apply p-3 py-2.5 text-sm rounded-md text-zinc-600 dark:text-zinc-500 transition-all dark:hover:bg-zinc-200/5 hover:bg-zinc-700/5 dark:hover:text-zinc-50 hover:text-zinc-950 flex items-center justify-center leading-none font-semibold active:bg-zinc-700/10 dark:active:bg-zinc-200/10;
	}

	.nav-button.active {
		@apply dark:text-zinc-50 dark:hover:bg-zinc-200/10 dark:active:bg-zinc-200/20 text-zinc-950 hover:bg-zinc-700/10 active:bg-zinc-800/20;
	}
</style>
