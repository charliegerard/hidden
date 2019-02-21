# Hidden.js

With the aim to sensitise people to improve the accessibility of their websites, this script will make non-accessible elements invisible to everyone, until their accessiblity issues are fixed.

**If they can't read it, you can't see it.**

## How to use

To add the script to your project, add the following line in your main `js` file:

```javascript
import hidden from 'https://raw.githubusercontent.com/charliegerard/hidden/master/hidden.js';
```

Then, to start the script, write:

```javascript
hidden() // in which you can pass a mode option and a threshold of errors
```

## Options

The script takes 2 arguments:

* A mode: `fullPage` or `elements`
* A maximum number of errors tolerated.

If you don't specify these parameters when calling `hidden`, the default values will be used ('fullPage' and 10).
