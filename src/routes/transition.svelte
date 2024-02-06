<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	export let url: string
</script>

{#key url}
	<div
		class="h-full overflow-x-hidden"
		in:fly={{ duration: 300, x: 10, opacity: 0.35, easing: quintOut }}
	>
		<slot />
	</div>
{/key}
