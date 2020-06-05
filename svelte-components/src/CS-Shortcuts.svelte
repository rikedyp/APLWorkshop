<script>
	import { DataTable } from "carbon-components-svelte";

	// Cheatsheet data
	import headers from "../data/cs/shortcut-headers.json";
	import rows from "../data/cs/shortcut-content.json";
</script>

<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css"/>
</svelte:head>

<h2>Shortcuts</h2>
<DataTable {rows} {headers} />
<br>
