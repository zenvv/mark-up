<script lang="ts" c>
	export let src: string
	export let alt: string
</script>

<img {src} {alt} loading="lazy" class="transition-transform hover:scale-105" />
