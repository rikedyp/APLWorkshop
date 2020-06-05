<script>
	import { Button } from "carbon-components-svelte";
	import { DataTable } from "carbon-components-svelte";

	// Cheatsheet data
	import headers from "../data/cs/ucmd-headers.json";
	import rows from "../data/cs/ucmd-content.json";
</script>

<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css"/>
</svelte:head>

<h2>User Commands</h2>
<DataTable {rows} {headers} />
<br>
