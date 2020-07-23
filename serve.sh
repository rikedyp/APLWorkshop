#!/bin/sh

host=0.0.0.0
port=4000

while getopts "h:p:" opt; do
    case "$opt" in
    h)  host=$OPTARG
        ;;
    p)  port=$OPTARG
        ;;
    esac
done

bundle exec jekyll serve -I --host=${host} --port=${port}
