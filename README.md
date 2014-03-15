# Underscore CSS

Underscore CSS is a library for CSS that provides common, reusable, helper
classes for structural, layout, and textual properties.  Best used in large size
applications with long life-spans and CMS style websites.

## Main Goals
 - Easy to build upon.
 - Easy to extend.
 - Lightweight.
 - Play nicely with other frameworks and toolkits.
 - Helpers focus on only a few properties.

## Compiling Stylesheets

Underscore CSS uses [Grunt](http://gruntjs.com/) for minifying and compiling the
main css files located in the stylesheets directory.

To re-compile or generate a new minified underscore css file: From a command
shell, navigate to the root of your project directory and type `grunt build` or
`grunt`.

### Installing Grunt

Grunt and the assoicated plugins are installed through [npm](https://www.npmjs.org/)
and [node.js](http://nodejs.org/) package manager.

1. Install Node v0.10.0 or greater.
2. From a command shell:
 - `npm install -g grunt-cli`
 - Navigate to project root directory and type `npm install`

**Alternatively** you can go [here](http://gruntjs.com/getting-started) to read
up on how to install Grunt.

## Browser Support
 1. Chrome
 2. Firefox
 3. Opera
 4. Safari
 5. IE 8+

## License

MIT [license](LICENSE.md)

