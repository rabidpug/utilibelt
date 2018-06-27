export default class ControlledError extends Error {
  constructor ( ...params ) {
    super( ...params );

    if ( Error.captureStackTrace ) Error.captureStackTrace( this, ControlledError );

    this.isControlled = true;
  }
}
