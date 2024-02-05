<script lang="ts">
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	export let url: string
</script>

{#key url}
	<div class="h-full" in:fly={{ duration: 300, x: 50, opacity: 0.35, easing: quintOut }}>
		<slot />
	</div>
{/key}
