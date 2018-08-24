/**
 * Thrown when a command is defined with multiple getters
 */
export class MultipleGettersError extends Error {
  constructor () {
    super(`only one getter per command is allowed`);
  }
}

/**
 * Thrown when a command has no getter parameter, but one was requested to be
 * called
 */
export class UnknownGetterError extends Error {
  constructor () {
    super(`getter not found`);
  }
}

/**
 * Thrown when a command is invoked with a parameter type that is not expected
 */
export class UnknownParameterError extends Error {
  constructor (param: string) {
    super(`unknown parameter: ${param}`);
  }
}

/**
 * Thrown when a command has no range parameter, but one was requested to be
 * called
 */
export class UnknownRangeError extends Error {
  constructor () {
    super(`no range command exists`);
  }
}

/**
 * Thrown when a command has no setter parameter, but one was requested to be
 * called
 */
export class UnknownSetterError extends Error {
  constructor (setter: string) {
    super(`setter not found: ${setter}`);
  }
}
