# v-bus
Global Event Emitter

## Install
```node
npm install v-bus --save
```

### Example

```javascript
var bus = require('v-bus');

// Subscribe to an event: 2 parameters: 1. Event Name     2. Callback with parameters argument
bus.subscribe('greet', function (params) {
    console.log('Hello ', params); 
});

// Subscribe to an event
bus.subscribe('greet', function (params) {
    console.log('Hi ', params); 
});

// Publish event greet with parameter 'World'
bus.publish('greet', 'World');

// Remove all subscribers to event 'greet'
bus.flush('greet');
```