<script context="module">
	import { Client } from '../../utils/client'

	export async function load() {
		const document = await Client.getByUID('page', 'frontpage', {})
		return {
			props: {
				document
			}
		}
	}
</script>

<script>
</script>

<h1>Welcome to SvelteKittery</h1>
<p>Visit jimbbo <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	h1 {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 100px;
		margin: 0;
	}
</style>
