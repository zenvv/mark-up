<script>
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import Navbar from './components/nav/Navbar.svelte'
	import Transition from './transition.svelte'

	import { page } from '$app/stores'
	import Footer from './components/footer/Footer.svelte'
</script>

<ModeWatcher />
<body class="flex flex-col">
	<Navbar />
	<main class="flex-1 max-w-6xl px-4 mx-auto mt-16">
		<Transition url={$page.url.href}>
			<slot />
		</Transition>
	</main>
	<Footer />
</body>
