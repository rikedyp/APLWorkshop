# Svelte + Jekyll + Carbon Design System

**NOTE:** This is an in-progress extension to the APLWorkshop "system."

[Svelte]() and [Carbon]() are used in conjunction with [Jekyll]() and [GitHub Pages]() to create interactive APL learning materials that are consistent across devices.

At present, the only part of this repository utilizing this framework are the [cheatsheets](../cheatsheets/).

## Development

### Setup

* `npm install` in this directory to install dependencies

### Local Server

1. Execute `npm run dev` in this directory to watch/build Svelte
	* Using [husky](https://github.com/typicode/husky) we `npm run build` to build for production on pre-commit
2. Execute the `serve.sh` shell script in the root directory to run the main Jekyll file watcher

