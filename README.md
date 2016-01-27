# JS Doc to Markdown Example Project

This is a just a simple project to look at how jsdoctomd can be used to supplement your project documentation using the jsdoc in the source.

The main goal was to look at how we might isolate specific jdoc comments to generate markdown pages that can then be referenced in the project docs.  

Being able to do this would be beneficial as it is more likely to be kept up to date if it is closer to the code plus then we have the benefit that if the dev comes to the code first then its also documented there.

## How it works

Using the grunt plugin [grunt-jsdoc-to-markdown](https://www.npmjs.com/package/grunt-jsdoc-to-markdown) to parse and convert the jsdoc to markdown (config can be found in the gruntfile).  Added a custom tag (@channel) to the jsdoc that I want to isolate and then used a handlebars template to filter and render what we want.

Lastly a step to concat the files together.

Hints: jsdoctomd uses [jsdocparse](https://www.npmjs.com/package/jsdoc-parse) its useful to use this to understand the json that is generated so you have an idea of the context available in you template.
Also there are a number of handy partials that are referenced in the Jsdoctomd documentation these are defined in the [DMD project](https://github.com/jsdoc2md/dmd), its useful to understand what they do.

## Usage

To generate the docs run the following command:
```grunt channelDocs```

[Generated docs](docs/channels.md)