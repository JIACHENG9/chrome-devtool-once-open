Find out whether Chrome console is open

## Install

```bash
$ npm install chrome-devtool-once-open
```

## Demo

https://codepen.io/jiacheng9/pen/QWGjPWa

## How to use

```html
<script src="node_modules/chrome-devtool-once-open/index.js"></script>
<script>
	chromeDevtoolOnceOpen(() => {
    alert('devtool open!');
  });
</script>
```

## Support

- Chrome DevTools

## Why

Many methods cannot be used, and some don't work if devtool is undocked,chrome-devtool-once-open works fine.