# Hidden.js

With the aim to sensitise people to improve the accessibility of their websites, this script will make non-accessible elements invisible to everyone, until their accessiblity issues are fixed.

**If they can't read it, you can't see it.**

## How to use

To add this to your project, simply add the following tag in the `<head>` of your HTML file.

```html
<script src="hidden.js" type="module"/>
```

Then, in your main `js` file, call:

```javascript
import hidden from '../hidden.js';

beAccessible() // in which you can pass a mode option and a threshold of errors
```

## Options

The script takes 2 arguments:

* A mode: `fullPage` or `elements`
* A maximum number of errors tolerated.

If you don't specify these parameters when calling `beAccessible`, the default values will be used ('fullPage' and 10).
