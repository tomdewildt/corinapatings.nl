import { Types } from "../fields";

export default ( fields ) => fields.reduce( ( values, field ) => {
    switch ( field.type ) {
        case Types.Number:
            return { ...values, [ field.name ]: 0 };
        case Types.Select:
            return { ...values, [ field.name ]: field.options[ 0 ].value };
        default:
            return { ...values, [ field.name ]: "" };
    }
}, {} );
