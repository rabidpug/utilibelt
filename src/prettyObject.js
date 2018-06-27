import chalk from 'chalk';

export default function prettyObject ( string, start ) {
  let indent = start;

  return ( typeof string === 'string' ? string : JSON.stringify( string ) )
    .replace( /\\"|"/g, '' )
    .replace( /{}/g, 'null' )
    .replace( /##([a-z]{1,})%%([a-z]{1,})%%/gi, ( rep, col, str ) => rep.replace( rep, chalk[col]( str ) ) )
    .replace( /(?:{|,(?!\s))([^:]*):/g, ( m, i ) => m.replace( i, chalk.italic.cyan( i ) ) )
    .replace( /(:)(?!\s|\/|\\)/g, ': ' )
    .replace( '{', '' )
    .replace( /{|,(?!\s)|}/g, m => {
      let n = m === '}' ? '' : '\n';

      if ( m === '{' ) ++indent;
      else if ( m === '}' ) --indent;
      for ( let i = 0; i < indent; i++ ) n += '  ';

      return n;
    } );
}
