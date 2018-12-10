# GrapesJS Plugin Button event

This plugin enables you to add button with event emitters to grapesJs panels.


## Summary

* Plugin
  * Name: `gjs-plugin-button-event`
  * Options:
      * buttons: [{
            name: 'buttonName',
            panel: 'panelName',
            eventName: 'eventName',
            icon: 'ICON',
            active: boolean,
            data: { message: 'event message'}
          }]



## Download

* `npm i grapesjs-plugin-button-event`



## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<link href="path/to/grapesjs-plugin-button-event.css" rel="stylesheet"/>

<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-plugin-button-event.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      plugins: ['gjs-plugin-button-event'],
      pluginsOpts: {
        'gjs-plugin-button-event': {/* ...options */}
      }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/chaitanya11/grapesjs-plugin-button-event.git
$ cd grapesjs-plugin-button-event
```

Install it

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```



## License

BSD 3-Clause
