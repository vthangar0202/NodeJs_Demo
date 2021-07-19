var events=require('events');

//Event emitter
var eventsEmiter= new events.EventEmitter();

//Own event handler
var myEventHandler=function (){
    console.log('Interface is Down');
}

//assign event to handler
eventsEmiter.on('LINK_DOWN',myEventHandler);

//Trigger the event
eventsEmiter.emit('LINK_DOWN')