<p align="center">
	<img width="140" src="https://up.boohee.cn/house/u/fe/logo/eitri.png" alt="eitri_logo">
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/eitri">
		<img src="https://img.shields.io/npm/v/eitri.svg" alt="">
	</a>
	<a href="https://www.npmjs.com/package/eitri">
		<img src="https://img.shields.io/npm/dt/eitri.svg" alt="">
	</a>
	<a href="https://opensource.org/licenses/MIT">
		<img src="https://img.shields.io/npm/l/eitri.svg" alt="">
	</a>
</p>

# Eitri
A simple CLI for creating your projects

## Getting Started

### Install

```shell
yarn add eitri -g
```
### Usage

```
  Usage: eitri <command>


  Commands:

    add|a      Add a new template
    list|l     List all the templates
    init|i     Generate a new project
    delete|d   Delete a template

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### Commands
#### add | a
This command would help you to add a new template to the `templates.json`, which will be used by `Eitri` to generate projects.
```
$ eitri add

? Set the custom name of the template: react
? Owner/name of the template: BooheeFE/react-template
? Branch of the template: master
┌───────────────┬─────────────────────────┬────────┐
│ Template Name │ Owner/Name              │ Branch │
├───────────────┼─────────────────────────┼────────┤
│ react         │ BooheeFE/react-template │ master │
└───────────────┴─────────────────────────┴────────┘
✔ New template has been added successfully!
```
`Eitri` use [download-git-repo](https://github.com/flipxfx/download-git-repo) to down load git repos. After answering 3 questions, you'll add a new template to `Eitri`.

### list | l
It shows you the templates list.
```
$ eitri list

┌───────────────┬─────────────────────────┬────────┐
│ Template Name │ Owner/Name              │ Branch │
├───────────────┼─────────────────────────┼────────┤
│ react         │ BooheeFE/react-template │ master │
├───────────────┼─────────────────────────┼────────┤
│ vue           │ BooheeFE/vue-template   │ master │
└───────────────┴─────────────────────────┴────────┘
```

### init | i
After adding new templates, you could use this command to generate your own project by choosing template.
```
$ eitri init

? Template name: react
? Project name: boohee
? Where to init the project? ./
⠹ Downloading template...

New project has been initialized successfully!
```

### delete | d
To delete a template, you could use this command:
```
$ eitri delete

? Which template you want to delete? vue
┌───────────────┬─────────────────────────┬────────┐
│ Template Name │ Owner/Name              │ Branch │
├───────────────┼─────────────────────────┼────────┤
│ react         │ BooheeFE/react-template │ master │
└───────────────┴─────────────────────────┴────────┘
✔ Template has been deleted successfully
```
## Template
The most important part of Eitri is `template`. All templates' infomation were list in the `templates.json`.
A template means a project sample, which has a simple or complex file structure.

You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Eitri's `templates.json`.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).

