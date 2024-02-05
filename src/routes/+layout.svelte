<script>
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import Navbar from './components/nav/Navbar.svelte'
	import { NotebookPen } from 'lucide-svelte'
	import Transition from './transition.svelte'

	import { page } from '$app/stores'
</script>

<ModeWatcher />
<div class="flex flex-col items-start justify-start w-full min-h-screen gap-8">
	<Navbar />
	<main class="flex-1 w-full max-w-6xl px-4 mx-auto mt-28 max-md:mt-36">
		<Transition url={$page.url.href}>
			<slot />
		</Transition>
	</main>
	<footer
		class="flex items-center justify-between w-full max-w-6xl p-4 px-0 pb-6 mx-auto border-t max-md:px-6 max-xl:px-4 border-zinc-500/20"
	>
		<p class="flex items-center gap-2 text-sm font-semibold select-none">
			<NotebookPen size="14" /> Mark-up!
		</p>
		<p class="flex items-center gap-2 text-xs dark:text-zinc-500">
			made with ♥ by <a href="https://www.github.com/zenvv" target="_blank">zenvv</a>
		</p>
	</footer>
</div>
