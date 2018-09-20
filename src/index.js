import grapesjs from 'grapesjs';
import { EventEmitter } from 'events';


export default grapesjs.plugins.add('gjs-plugin-button-event', (editor, opts = {}) => {
  let c = opts;
  let config = editor.getConfig();
  let pfx = config.stylePrefix || '';
  let panelManager = editor.Panels;
  const eventEmitter = new EventEmitter();

  let defaults = {

    buttons: [{
      name: 'sampleButton',
      panel: 'options',
      eventName: 'gjs-sampleButtonEvent',
      icon: 'fa fa-snowflake-o',
      active: false,
      data: { message: 'hello from gjs-plugin-button-event'}
    }],

    // Text for the button in case the custom one is not provided
    btnText: 'Publish',

    icon: 'fa fa-paper-plane'
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  let panelModels = panelManager.getPanels();
  panelModels = panelModels.models.map((model) => model.id);

  if (!c.buttons.every(button => panelModels.includes(button.panel))) {
    throw new Error('panel not found');
  }
  
  c.buttons.forEach(button => {
    const buttonCommand = 'publish'+ button.name +'Event'
    var newButton = panelManager.addButton(button.panel, {
      id: button.name,
      className: button.icon,
      command: buttonCommand,
      attributes: { title: button.name },
      active: button.active,
    });
  
    editor.Commands.add(buttonCommand, {
      run: (editor, sender) => {
        eventEmitter.emit(button.eventName, button.data);
        console.log('emited', button.eventName,  'event');
        newButton.set('active', false);
      }
    });
  });

});
