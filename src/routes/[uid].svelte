<script context="module">
	import { Client } from '../../utils/client'
	import { pageResolver } from '../../utils/resolvers'

	export async function load({ page }) {
		const { uid } = page.params
		const document = await Client.getByUID('page', uid, {})

		if (document) {
			return {
				props: {
					page: pageResolver(document),
					uid
				}
			}
		}
	}
</script>

<script lang="ts">
	import type { PageInterface } from '../../utils/resolvers'
	export let page: PageInterface
</script>

<h1>{page.title}</h1>
<p>Visit jimbbo <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
	h1 {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 100px;
		margin: 0;
	}
</style>
