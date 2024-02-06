<script lang="ts">
	import { page } from '$app/stores'
	import { Undo2 } from 'lucide-svelte'
</script>

<div class="relative flex items-center justify-center w-full min-h-[50vh] overflow-hidden">
	<div class="flex flex-col items-start justify-center gap-6">
		<h1 class="text-6xl max-lg:text-5xl">Oh no! :(</h1>
		<span
			class="flex flex-col w-full gap-0 p-6 px-8 text-red-500 rounded-lg outline-2 outline-dashed outline-red-500/25 bg-red-600/5 -outline-offset-8 backdrop-blur-lg"
		>
			<h2 class="m-0 leading-none">Error: {$page.status}</h2>
			<h4 class="leading-none opacity-80">{$page.error?.message}</h4>
		</span>
		<a
			href="/"
			class="flex items-center gap-2 p-3 px-6 text-sm font-semibold border rounded-lg border-zinc-500/20 hover:bg-zinc-500/10 w-max backdrop-blur-lg"
			><Undo2 size="14" /> Take me back to homepage!</a
		>
	</div>
</div>
