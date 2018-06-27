export default function getPath (
  baseData, pathToRetrieve, ifNotExists, ifExists
) {
  const parts = pathToRetrieve.includes( '.' ) ? pathToRetrieve.split( '.' ) : [ pathToRetrieve, ];
  let exists = true;

  for ( const part of parts ) {
    if ( baseData && baseData[part] ) baseData = baseData[part];
    else {
      exists = false;

      break;
    }
  }

  return exists === false
    ? ifNotExists
    : ifExists && typeof ifExists === 'function'
      ? ifExists( baseData )
      : ifExists
        ? ifExists
        : baseData;
}
