# ember-kns-helpers

[![Greenkeeper badge](https://badges.greenkeeper.io/kinesisptyltd/ember-kns-helpers.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/kinesisptyltd/ember-kns-helpers.svg?style=shield)](https://circleci.com/gh/kinesisptyltd/ember-kns-helpers)
[![npm Version][npm-badge]][npm]
[![Ember Observer Score](http://emberobserver.com/badges/ember-kns-helpers.svg)](http://emberobserver.com/addons/ember-kns-helpers)

Provides additional helpers for Kinesis' apps.

## Available helpers

* [Truth](#truth-helpers)
  + [`is-present`](#is-present)
  + [`deep-equal`](#deep-equal)
* [Format](#format-helpers)
  + [`format-blank`](#format-blank)
  + [`format-boolean`](#format-boolean)
  + [`format-date-range`](#format-date-range)
  + [`format-increment`](#format-increment)
  + [`format-percentage`](#format-percentage)
  + [`format-time-from-now`](#format-time-from-now)
  + [`format-underscore`](#format-underscore)
  + [`past-tense`](#past-tense)
* [Array](#array-helpers)
  + [`index-of`](#index-of)

## Usage

### Truth helpers

#### `is-present`

Uses built in `Ember.isPresent` to check for presence.

```hbs
{{#if (is-present someProp)}}
{{/if}}
```
**[⬆️ back to top](#available-helpers)**

#### `deep-equal`

Checks if two arrays contain the same items irrespective of what order they are in each array. Useful
for the `All` in a checkbox list.

```hbs
{{input
  type="checkbox"
  checked=(deep-equal checkedYears organisationYears)}}
```
**[⬆️ back to top](#available-helpers)**

### Format helpers

#### `format-blank`

Shows the value is present, otherwise replaces it with default `-` or optionally provided replacement.

```hbs
{{! Shows the default "-"}}
{{format-blank undefined}}

{{! Use something other than the default.}}
{{format-blank undefined "NA"}}
```
**[⬆️ back to top](#available-helpers)**

#### `format-boolean`

Shows Yes/No for booleans.

```hbs
{{format-boolean flag}}
```
**[⬆️ back to top](#available-helpers)**

#### `format-increment`

Simply adds 1 to a number. Useful for showing collection indicies.

```hbs
{{format-increment index}}
```
**[⬆️ back to top](#available-helpers)**

#### `format-percentage`

Converts a decimal percentage to a human readable percentage.

```hbs
{{! Shows 10% }}
{{format-percentage 0.10}}
```
**[⬆️ back to top](#available-helpers)**

### Array helpers

#### `index-of`

Returns the index of an object in an array.

```hbs
{{index-of item array}}
```
**[⬆️ back to top](#available-helpers)**

## Development

To link your local package during development:

1. Go to the package directory and create a globally-installed symbolic link 
  - `cd ~/Code/ember-kns-helpers/`
  - `npm link`
2. Go to the project directory and create a symlink from the local `node_modules` folder to the global symlink.
  - `cd ~/Code/project/`
  - `npm link ember-kns-helpers`

To unlink the local package:

1. Unlink in the project directory
  - `npm unlink ember-kns-helpers`
2. Reinstall
  - `npm install`

## License

ember-kns-helpers is [MIT Licensed](https://github.com/kinesisptyltd/ember-kns-helpers/blob/master/LICENSE.md).

[npm]: https://www.npmjs.org/package/ember-kns-helpers
[npm-badge]: https://img.shields.io/npm/v/ember-kns-helpers.svg?style=flat-square
