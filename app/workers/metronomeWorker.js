let timerID = undefined
let interval = 100

self.onmessage = function (e) {
  if (e.data === 'start') {
    timerID = setInterval(() => {
      self.postMessage('tick')
    }, interval)
  } else if (typeof e.data === 'object' && e.data.interval) {
    interval = e.data.interval

    if (timerID) {
      clearInterval(timerID)
      timerID = setInterval(() => {
        self.postMessage('tick')
      }, interval)
    }
  } else if (e.data === 'stop') {
    clearInterval(timerID)
    timerID = undefined
  }
}
