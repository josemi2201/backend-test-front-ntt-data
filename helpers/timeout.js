const clearTimeouts = (timeouts) => {
  timeouts.forEach((timeout) => clearTimeout(timeout));
};

module.exports = {
  clearTimeouts,
};