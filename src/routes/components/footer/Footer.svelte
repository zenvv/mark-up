<script lang="ts">
	import { NotebookPen } from 'lucide-svelte'
	import NavButton from '../nav/NavButton.svelte'
</script>

<footer
	class="flex items-center justify-between w-full max-w-6xl p-4 px-6 pb-6 mx-auto border-t border-zinc-500/20 max-md:flex-col max-md:gap-6 max-md:py-6 max-md:bg-zinc-500/5"
>
	<span class="flex items-center gap-4">
		<NavButton href="/about" name="About" />
		<NavButton href="/contact" name="Contact" />
	</span>
	<p class="flex items-center gap-2 text-xs dark:text-zinc-500">
		made with ♥ by <a href="https://www.github.com/zenvv" target="_blank">zenvv</a>
	</p>
</footer>
