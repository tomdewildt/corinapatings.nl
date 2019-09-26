export default ( value ) => ( value === undefined || value === null || value === ""
    ? "Required."
    : false
);
