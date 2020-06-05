import CS_Ucmds from './CS-Ucmds.svelte';
import CS_Shortcuts from './CS-Shortcuts.svelte';

new CS_Shortcuts({
	target: document.querySelector('#cheatsheet')
});

new CS_Ucmds({
	target: document.querySelector('#cheatsheet')
});
