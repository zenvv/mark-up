<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte'

	import { toggleMode } from 'mode-watcher'
</script>

<button class="switch-theme" on:click={toggleMode}>
	<Sun size="18" class="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
	<Moon size="18" class="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
	<span class="sr-only">Toggle theme</span>
</button>

<style lang="postcss">
	.switch-theme {
		@apply text-xs p-2 aspect-square size-8 flex items-center justify-center rounded-lg dark:hover:bg-zinc-500/20 dark:active:bg-zinc-500/20 dark:text-zinc-300 dark:hover:text-zinc-50 hover:bg-zinc-400/20 active:bg-zinc-400/20 text-zinc-700 hover:text-zinc-900 transition-all;
	}
</style>
