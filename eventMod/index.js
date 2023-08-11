const EventEmitter = require('events');
const event = new EventEmitter();
let count = 0;
event.on('num',()=>{
    count ++;
    console.log("count:",count);
})

event.emit('num');
// passing a argument in event
event.on('event', (a, b) => {
    console.log(a, b, this);
    // Prints: a b {}
  });
event.emit('event', 'a', 'b');

// create a function 
const myFunction = () => {
    console.log("This is My Function");
}
event.on('myFunction',myFunction);

event.emit('myFunction');
