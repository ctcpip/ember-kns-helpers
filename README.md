# ember-kns-helpers

Provides additional helpers specific for Kinesis' apps.

## Available helpers

* [Truth](#truth-helpers)
  + [`is-present`](#is-present)
  + [`is-all`](#is-all)
  + [`has-any`](#has-any)
* [Format](#format-helpers)
  + [`format-blank`](#format-blank)
  + [`format-boolean`](#format-boolean)
  + [`format-date-range`](#format-date-range)
  + [`format-increment`](#format-increment)
  + [`format-numeric`](#format-numeric)
  + [`format-numeric-two`](#format-numeric-two)
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

#### `is-all`

#### `has-any`

### Format helpers

### Array helpers

### `index-of`

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
