# mote ![build status](https://travis-ci.com/bentruyman/mote.svg?token=WG2dmqzz1mFcaGcJe57N&branch=master)

> ⚠️ **WARNING**: this is side project, don't expect production-ready code

**mote** is an remote system for my home theater visually optimized for the
**iPad Mini**.

![screenshot of the iPad user interface](https://user-images.githubusercontent.com/85315/43060207-c2f4c844-8e04-11e8-918e-bc645c1e8920.png)

## Usage

> TODO: add content

### Development

To get started, after cloning this project, run `npm run bootstrap` to get
started.

#### Build Tasks

For simplicity, this project uses npm scripts for task management. Below are
the tasks that can be invoked from the root of the project via
`npm run <script>`.

##### `bootstrap`

Installs the dependencies for the entire project.

##### `clean`

Runs the `clean` task of each package in the project.

##### `docker-build`

Builds Docker images for each package. Read the [Docker](#docker) section for more
information.

##### `lint`

Runs `eslint` over all source code in the entire project.

##### `reset`

Removes all `node_modules` directories and `package-lock.json` files from a
project (e.g. in order to generate a clean dependency tree).

##### `test`

Runs the `test` task of each package in the project.

### Deployment

> TODO: add content, instructions on how to use the Dockerfiles

#### Docker

> TODO: describe how to use the images, expected ports/volumes

## Hardware

> TODO: add content

### Setting up iPad Mini

> TODO: add content

## Known Issues

- npm install warnings:
  - `eslint-config-standard@12.0.0-alpha.0`: https://github.com/standard/eslint-config-standard/issues/114
  - `eslint-plugin-vue@4.7.0`: https://github.com/vuejs/eslint-plugin-vue/pull/504
- parcel + hapi:
  - parcel must upgrade to babel 7: https://github.com/parcel-bundler/parcel/issues/868
  - https://github.com/hapijs/boom/pull/185

## License

MIT © [Ben Truyman](https://bentruyman.com/)
