"use strict";

/**
 * @name handleFatalError
 * @description A simple handler for fatal errors
 * @param {Object} error The object with the error specifications
 * @param {String} msg A simple message to give extra context for debug
 */
function handleFatalError(error, msg) {
  console.log("[FATAL ERROR] Apagando servidor \n", msg);
  console.error(error);
  process.exit(1);
}

/**
 * @name handleError
 * @description A simple handler for normal errors
 * @param {Object} error The object with the error specifications
 * @param {String} msg A simple message to give extra context for debug
 */
function handleError(error, msg) {
  console.log("[ERROR] A ocurrido un error en \n", msg);
  console.error(error);
  throw new Error(error.message);
}

module.exports = {
  handleFatalError,
  handleError,
};
