export default ( value ) => ( value.length !== 10 || value.length !== 12
    ? "Invalid phone number."
    : false
);
