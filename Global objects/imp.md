# setImmediate() method:

It schedules the immediate execution of the callback. The callback functions are queued and executed in the order in which they are created. The callback queue is processed at every event loop iteration. If there is a timer queued inside the executing callback, the timer will not get triggered until the next event loop iteration.

# clearImmediate() method:

It stops the immediate object returned by the setImmediate() method.
setInterval() method: It executes the callback function at repeated intervals. If an interval is larger than 2147483647 or less than 1, the interval is set to 1. Non-integer delays are truncated to the nearest integer.
clearInterval() method: It stops the interval object created by setInterval() method.

# setTimeout() method:

It is a global function used to run a callback function after at least delay in milliseconds. Node.js does not guarantee the exact timing of when callbacks will fire but tries to maintain the timing as close as possible to the specified delay. Any delay larger than 2147483647 or less than 1, is set to 1 automatically. Non-integer delays are truncated to the nearest integer.

```
function printHello() {
console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var timeoutObj = setTimeout(printHello, 2000);

```

` clearTimeout() method:`
The clearTimeout() method is used to cancel or stop a timeout that was set with setTimeout() method. The timeoutObj is the object returned by setTimeout() method.

# queueMicrotask() method:

A microtask is a short function that is executed after the callback function exits and only if the JavaScript execution stack is empty. The queueMicrotask() method is used to execute such functions after the callback function completes successfully. If the callback function does not return the control to other JavaScript code, the event loop runs all of the microtasks in the microtask queue. The microtask queue is processed multiple times per iteration of the event loop. If a microtask adds more microtasks to the queue then the newly-added microtasks execute before the next task is run. This is because the event loop keeps calling microtasks until there are none left in the queue.
