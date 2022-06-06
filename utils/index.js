import { format } from 'date-fns';

export const formatDate = dateString => {
    const dt = new Date(dateString);
    const dtDateOnly = new Date(
        dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
    );

    return format(dtDateOnly, 'MMMM yyyy');
};
