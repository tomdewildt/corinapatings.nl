export default ( value ) => ( value === undefined || value === null || value === ""
    ? "Dit veld is verplicht."
    : false
);
