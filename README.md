## Important! This project is discontinued.

Feel free to fork it and modify to your liking. Please be aware that it is outdated and may not work with the recent SDFX releases.

_____

Salesforce DX development automation toolkit.

## What is sfdx-watch?

This package aims to ease the development process while working with Salesforce DX.

**Automation** - This toolkit helps you automate such tasks as `watch` for changes, compile `scss`, and `deploy` your code to Salesforce DX enabled org. (Babel JS transpiling is currently in development)

**IDE-agnostic** - Use it with any IDE of choice as long as you have `sfdx-cli` installed.

**Zero-configuration** - All underlying tasks are bundled in a single `watch` command. Every transformation task is optional (e.g., SCSS compilation will only run if `.scss` files are actually used in your project).

## Installation

There are a few ways of how you can use this package:

#### 1. 'sfdx-cli' plugin

Install `sfdx` plugin using `plugins:install`

```console
$ sfdx plugins:install sfdx-watch
```

Choose **yes** when prompted to *'Continue installation?'*.

Launch the `watch` command from `sfdx`.

```console
$ sfdx watch
```

#### 2. 'npm' global package

First, you need to run npm install:

```console
$ npm i sfdx-watch -g
```

Launch the `watch` task from cli and enjoy your automated development.

```console
$ sfdx-watch watch
```

#### 2. 'gulp' task

If you are using `gulp` you can require the **watch** task directly and use it in your workflow.

First, run npm install:

```console
$ npm i sfdx-watch -D
```

And then:

```javascript
const gulp = require('gulp');
const { watch } = require('sfdx-watch');

gulp.task('default', watch);
```

## Parameters

#### --username

```
-u, --username (optional)
```

```console
$ sfdx watch -u ScratchOrgAlias
```

*Type: string*

A username or alias for the target org. Use it for rapid switching between scratch orgs.

### Parameters in gulp

```javascript
const gulp = require('gulp');
const { watch } = require('sfdx-watch');

const config = {
  flags: {
    username: 'ScratchOrgAlias'
  }
}

gulp.task('default', () => watch(config));
```

## Documentation

This toolkit currently supports the following tasks:

### Watch

Watch for changes in every package listed in `sfdx-project.json` configuration file (i.e. `packageDirectories`). In case if the configuration file is missing, a default package name 'force-app' will be used.

All the underlying tasks will be launched 'on change' event and filtered based on file type.

### Deploy

Deploy is launched by **watch** when any file, that is not explicitly ignored in `.forceignore`, is changed.

Does exactly what `sfdx force:source:push` does. Targets the default scratch org. Capable of bundling multiple changes in a single push.

All the files that you do **NOT** use on the scratch org should be listed in `.forceignore` (e.g. `**.scss`).

### SCSS

Compiles *'.scss'* and *'.sass'* files to *'.css'* using the same name and within the same folder. This allows you to rename your *'.css'* files to *'.scss'* in the existing components and start writing modular SCSS without any additional changes.

This logic can be applied to any folder within you 'package'. For example 'static resources' can also benefit from *'.scss'* syntax.

You can also create a 'shared' folder containing all your 'common' styles, 'variables', 'utilities', and 'helpers'. Access them in any component using `@import`.

The folder structure and naming are totally up to you. Just remember to update `.forceignore` accordingly.

```
# e.g., ignore every 'scss' directory and all '.scss' files
**scss/
**/*.scss
**/*.sass
```

In order to use 'tokens' they should be wrapped with `#{}` interpolation syntax.

```scss
$color: 'token(myBodyTextColor)';

body {
  color: #{$color};
  background: #{token(myBodyBackgroundColor)};
}
```

### ES6

Currently in development.
