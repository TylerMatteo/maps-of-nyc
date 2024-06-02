# Intro
This is the repo for [Maps of NYC](http://mapsof.nyc/). It is a simple website built on [Eleventy](https://www.11ty.dev) that hosts a crowd sourced list of maps about NYC on the internet.

This is a small side project and very much a work in progress. If you came across this project and want to contribute or just have questions, feel free to [open an issue](https://github.com/TylerMatteo/maps-of-nyc/issues/new).

## How maps are documented
The list on the site comes from the contents of the `/src/maps` folder. Each markdown file in that folder adds another map to the list. Each file contains metadata about the map in form of Eleventy [front matter](https://www.11ty.dev/docs/data-frontmatter/) as well as a long form description of the map and what it does. Front matter can contain the following properties:

> This list is a work in progress!

1. name: The name of the map or application
2. tagline: A short (ideally 10 words or fewer) tagline for the map
3. link: The URL where the map can be seen on the internet
4. repo: If the source code for the map is open, put a link to the repository here. This field is optional
5. owner: The organization or individual who built and maintains the map
