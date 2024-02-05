<script lang="ts">
	let count = 0

	const increment = () => (count += 1)
</script>

<button
	on:click={increment}
	class="block p-3 px-6 my-2 rounded-lg bg-zinc-900/90 text-zinc-50 dark:bg-zinc-50/90 dark:text-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-50"
>
	Counter {count}
</button>
