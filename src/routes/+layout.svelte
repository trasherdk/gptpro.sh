<script>
	import './styles.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<main class="absolute inset-0">
		<slot />
	</main>

	<!-- <footer>
		Created by <a class="underline" href="https://twitter.com/ankurpsinghal">Ankur Singhal</a>
	</footer> -->
</div>

<style>
</style>
