# A more caffienated way to call setTimeout and setInterval.
window.after = (ms, cb) -> setTimeout cb, ms
window.every = (ms, cb) -> setInterval cb, ms