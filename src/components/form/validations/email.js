const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default ( value ) => ( !new RegExp( regex ).test( value )
    ? "Ongeldig e-mailadres."
    : false
);
