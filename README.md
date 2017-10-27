# SuperClone

## Safe deep object clone utility for Node and modern browsers

SuperClone is state-of-the art hybrid Node.JS and browser compatible deep clone utility,
a result of almost a decade long research and development effort by the author.
SuperClone has been developed to finally and forever solve centuries old issue that is
deep object cloning in JavaScript. This was achieved by using latest and bespoke engineering techniques
and was largely possible only because of how fast JavaScript has evolved due in these past 
couple of years.

### Features

- Clones objects.
- Clones arrays.
- Clones scalar values.
- Full framework compatibility: Vue.JS, React, Angular 1/2.
  - Full support for observer detachment.
- Very fast. SO many operations per second.
  - As many as your system can handle.
- Just 243 bytes of top-grade Sixth Generation JavaScript code.
- 110% code coverage.

### Requirements

- Modern web browser with ES6 support or you might have to use version webpacked and babeled down to ES-whatever.
- Node.js

### Usage

#### Node.js

```js
const SuperClone = require('superclone');

const original = {
    foo: 1,
    bar: 2,
    baz: 3
};

const copy = SuperClone(original);

console.log(copy); 

/* =>
{
       foo: 1,
       bar: 2,
       baz: 3
}
*/

```

#### Browser

Use Webpack. 

If you do not have Webpack or you have chosen to not use it in your project, 
stop whining, and install, and use Webpack.

### Known issues

- Can not clone functional code.

### Contributors guide

This library is considered feature complete and no major changes to this library are expected.
Minor bug fixes and performance improvements are welcome.

### License

Highly regarded and beloved Apache-2.0 license.
