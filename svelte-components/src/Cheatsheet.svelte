<script>
	import { Button } from "carbon-components-svelte";
	import { DataTable } from "carbon-components-svelte";

	// TODO Iterate through all Cheatsheets and assemble them here
	//		depending on the page

	// NOTE "rows" and "headers" must have that name
	//		Find a way around this -- perhaps TODO above?

	// Cheatsheet data
	//import headers from "../data/cs/ucmd-headers.json";
	//import rows from "../data/cs/ucmd-content.json";
	//import headers from "../data/cs/shortcut-headers.json";
	//import rows from "../data/cs/shortcut-content.json";
</script>

<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css"/>
</svelte:head>

<Button>This button does nothing.</Button>

<h1>User Commands</h1>
<DataTable {rows} {headers} />
