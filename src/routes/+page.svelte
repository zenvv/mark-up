<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	import { ArrowUpRightFromSquare, BookOpenText } from 'lucide-svelte'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="flex flex-col items-start justify-start gap-12 my-8">
	<hgroup class="max-lg:px-4">
		<h1 class="flex items-center gap-2"><BookOpenText /> Homepage</h1>
		<h3 class="lading-none opacity-80">Choose a article bellow to read!</h3>
	</hgroup>
	<span class="grid w-full grid-cols-2 gap-4 max-lg:grid-cols-1 max-md:gap-2">
		{#each data.posts as post}
			<a
				href={post.slug}
				class="relative flex flex-col items-start justify-start gap-1 p-6 m-0 overflow-hidden leading-none transition-all border from-transparent to-zinc-500/0 size-full rounded-xl hover:bg-zinc-500/10 border-zinc-500/10 hover:border-zinc-500/50 group"
			>
				<span
					class="absolute top-0 right-0 p-1.5 m-4 transition-all origin-top-right scale-0 border rounded-lg opacity-0 border-zinc-500/20 group-hover:opacity-100 group-hover:scale-100"
				>
					<ArrowUpRightFromSquare size="12" />
				</span>
				<p class="text-xs opacity-60">
					Published at {formatDate(post.date)}
				</p>
				<h4 class="mt-2 mb-0 text-lg font-bold">{post.title}</h4>
				<p class="h-full text-sm break-words text-pretty">{post.description}</p>
			</a>
		{/each}
	</span>
</section>
