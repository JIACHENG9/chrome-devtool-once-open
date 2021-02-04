function chromeDevtoolOnceOpen(callback) {
  setTimeout(function () {
		 const error = new Error();
    Error.prepareStackTrace = function (err) {
      if (error === err) {
        callback();
      }
      return err.stack;
    }
    throw error;
  }, 0);
}