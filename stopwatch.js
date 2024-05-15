
function StopWatch() {
    this.duration = 0.0;
    let stopped = true;
    let intervalId; // To store the interval ID
    
    this.start = function () {
        if (!stopped) {
            throw new Error('Stopwatch has already started.');
        }
        stopped = false;
        intervalId = setInterval(() => {
            this.duration++; // Increment duration every second
        }, 1000);
    }
    
    this.stop = function () {
        if (stopped) {
            throw new Error('Stopwatch is not started.');
        }
        stopped = true;
        clearInterval(intervalId); // Stop the interval
    }

    this.reset = function () {
        this.duration = 0.0; // Reset duration to zero
    }
}

let sw = new StopWatch();
