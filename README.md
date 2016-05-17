# Underscore.css.scss

Underscore.css.scss is a library for CSS and SASS that provides common, reusable, helper
classes for structural, layout, and textual properties.  Best used in large size
applications with long life-spans and CMS style websites.

## Main Goals
 - Easy to build upon.
 - Lightweight.
 - Easily integrate with other frameworks and toolkits.

## Directory Structure

### CSS

The `/css` directory contains all the individual `css` files that make up `underscore.css.scss`.  Each stylesheet provides some basic helpers that addresses the theme of the file name.

Example:

  ```css
  // image.css

  ._imgFluid {
    height: auto;
    max-width: 100%;
  }

  ...
  ```

Full list of `css` files:

 - [images.css](https://github.com/defo550/underscoreCSS/blob/master/css/images.css)
 - [layout.css](https://github.com/defo550/underscoreCSS/blob/master/css/layout.css)
 - [lists.css](https://github.com/defo550/underscoreCSS/blob/master/css/lists.css)
 - [offsets.css](https://github.com/defo550/underscoreCSS/blob/master/css/offsets.css)
 - [sizing.css](https://github.com/defo550/underscoreCSS/blob/master/css/sizing.css)
 - [spacing.css](https://github.com/defo550/underscoreCSS/blob/master/css/spacing.css)
 - [text.css](https://github.com/defo550/underscoreCSS/blob/master/css/text.css)

### SCSS

The `/scss` directory contains all the individual `css` files that make up `underscore.css.scss` in their `.scss` form.  The `.scss` files also contains more detailed comments explaining what the various selectors address, any specific `imports` the file depends on, etc...

Full list of `scss` files:

 - [images.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/images.scss)
 - [layout.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/layout.scss)
 - [lists.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/lists.scss)
 - [offsets.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/offsets.scss)
 - [sizing.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/sizing.scss)
 - [spacing.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/spacing.scss)
 - [text.scss](https://github.com/defo550/underscoreCSS/blob/master/scss/text.scss)

#### mixins, functions, and addons

The `/scss/mixins`, `/scss/functions`, and `/scss/addons` directories contains some useful helper mixins and functions.

#### convert-to-css

The `/scss/convert-to-css` contains manifest files for each of the inividual `.scss` located in `/scss` directory.  The purpose of these files are for the compilation of the `.css` files that are in `/css` directory.  Each manifest file will conatin the appropriate dependencies (i.e. imports) that is specific to that helper file.

Example:

  ```css
  // Layout Manifest file.
  // To be included in sass:dev grunt task for compilation to css.

  // Mixins
  @import '../mixins/center-box';
  @import '../mixins/clearfix';

  // Settings
  @import '../settings';

  // Layout
  @import '../layout';
  ```

## Compiling Stylesheets

Underscore.css.scss uses [Grunt](http://gruntjs.com/) for task management.

### Generate `css` files

From a command shell and at root of project:

  ```
  npm run build

  // Deprecated
  grunt build-css
  ```

If you want to generate `css` on updates to the main `scss` files:

  ```
  npm run watch

  // Depreacted
  grunt listen-scss
  ```

Underscore.css.scss also uses the [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) plugin.  Running either command above will parse the CSS and add the appropriate vendor-prefixes using the [Can I use](http://caniuse.com/) database.

## Requirement

There are no hard requirements to underscore.css.scss, b/c anybody can just take the `css` files and do as they please, but in order to use the task manager [Grunt](http://gruntjs.com/) or to work with [SASS](http://sass-lang.com/) you will need to install them on your computer.

### Installing Grunt

Grunt and the associated plugins are installed through [npm](https://www.npmjs.org/),
package manager for [node.js](http://nodejs.org/).

1. [Install Node](http://nodejs.org/) v0.10.0 or greater.
2. From a command shell:
 - `npm install -g grunt-cli`
 - Navigate to project root directory and type `npm install`

**Alternatively** you can go [here](http://gruntjs.com/getting-started) to read
up on how to install Grunt.

### Installing SASS

Uses SASS 3+

**Note**: SASS has a Ruby dependency.

1. **Open Terminal or Command Prompt.**

2. **Install SASS.**

  ```
  gem install sass
  ```

3. **Double-check.**

  ```
  sass -v
  ```

More information on how to install SASS [here](http://sass-lang.com/install).

## Styling Format

### Namespace

All selectors are namespaced with an underscore to avoid any possible naming collisions with your personal application and other third-party libraries.

  ```css
  ._selectorname { ... }
  ```

### Declaration order

Declaration properties are grouped by context, with a single line seperating each group, and properties arranged in alphabetical order per group.

Group contexts and order within declaration block are as follows:

 1. layout
 2. box
 3. background
 4. typographical
 5. Other
  - generated content
  - list properties
  - table properties
  - ...

Example:

  ```css
  ._selector {
    display: block;
    overflow: hidden;
    position: relative;

    border: 1px solid;
    box-sizing: border-box;
    margin: 10px;
    padding: 10px;

    background: transparent;

    color: #333;
    font-size: 16px;

    list-style: none;
  }
```

## Versioning

**Underscore.css.scss** is maintained under the **Semantic Versioning** guidelines as best as possbile.

Releases are numbered `<major><minor><patch>`, increment the:

1. MAJOR version breaking backwards compatibility (reset minor and patch).
2. MINOR version when you add functionality in a backwards-compatible manner (reset patch).
3. PATCH version when you make backwards-compatible bug fixes.

For information about Semantic Versioning, visit [semver.org](http://semver.org/).

## Browser Support
 1. Chrome
 2. Firefox
 3. Opera
 4. Safari
 5. IE 8+ (I think!)

## License

MIT [license](LICENSE.md)

