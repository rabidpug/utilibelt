export default function promiseErrorWrap ( fn ) {
  return function wrap ( ...args ) {
    return fn( ...args ).catch( args[2] );
  };
}
