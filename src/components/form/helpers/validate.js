/* eslint-disable no-restricted-syntax */
export default ( value, validations ) => {
    for ( const validation of validations ) {
        const error = validation( value );
        if ( error ) return error;
    }
    return null;
};
