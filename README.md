# Learn Dyalog APL Workshop
## A self-contained course for instructors

## Development

The APL Workshop course is developed using Jekyll, since it has native GitHub Pages support.

**Requirements:**
* Ruby
* Jekyll

### Setup on Ubuntu

[Source](https://jekyllrb.com/docs/installation/ubuntu/)

1. `sudo apt-get install ruby-full build-essential zlib1g-dev`
2. `gem install jekyll bundler`

### Local Development & Testing
`bundle install && ./serve.sh`

The `serve.sh` help script has the following options:
	* `-h`: Define a host, defaults to `0.0.0.0`.
	* `-p`: Define a port, defaults to `4000`.

