"use strict";
/**
 * @name respondSuccess
 * @description A handler to standardize all successful responses
 * @param {Object} req The request object from the route
 * @param {Object} res The response object from the route
 * @param {Number} statusCode The status code for the operation
 * @param {Object} data The object containing the data to be delivered
 */
function respondSuccess(req, res, statusCode = 200, data = {}) {
  res.status(statusCode).json({
    state: "Success",
    data,
  });
}

/**
 * @name respondError
 * @description A handler to standardize all failed operations
 * @param {Object} req The request object from the route
 * @param {Object} res The response object from the route
 * @param {Number} statusCode The status code for the operation
 * @param {String} message The string detailing the reason for the error
 * @param {String} type A short name for the type of error
 * @param {Object} details Extra info about the error
 */
function respondError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
  type = "Internal",
  details = {
    message: "Contact admin",
  },
) {
  res.status(statusCode).json({
    state: "Error",
    type,
    message,
    details,
  });
}

/**
 * @name respondInteralError
 * @description A handler to standardize all failed operations qualified as Server Error
 * @param {Object} req The request object from the route
 * @param {Object} res The response object from the route
 * @param {Number} statusCode The status code for the operation
 * @param {String} message The string detailing the reason for the error
 */
function respondInternalError(
  req,
  res,
  statusCode = 500,
  message = "Couldnt process the request",
) {
  res.status(statusCode).json({
    state: "Error",
    message,
  });
}

module.exports = { respondSuccess, respondError, respondInternalError };
