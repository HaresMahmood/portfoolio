import * as Yup from 'yup';

const today = new Date();

const periodValidationRule = Yup.object().shape({
    from: Yup.date().max(today, 'Start date must be earlier than today'),
    to: Yup.date().when('from', (startDate, schema) => {
        if (startDate) {
            const dayAfter = new Date(startDate.getTime() + 86400000);

            return schema.min(
                dayAfter,
                'End date must be later than start date'
            );
        }

        return schema;
    })
});

export const profileFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    title: Yup.string().required('Required'),
    about: Yup.string(),
    phone: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    linkedin: Yup.string().url('Must be a valid URL'),
    twitter: Yup.string().url('Must be a valid URL'),
    facebook: Yup.string().url('Must be a valid URL'),
    education: Yup.array().of(
        Yup.object().shape({
            school: Yup.string().required('Required'),
            course: Yup.string().required('Required'),
            period: periodValidationRule
        })
    ),
    experience: Yup.array().of(
        Yup.object().shape({
            company: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            period: periodValidationRule,
            description: Yup.string()
        })
    ),
    projects: Yup.array().of(
        Yup.object().shape({
            project: Yup.string().required('Required'),
            repository: Yup.string(),
            description: Yup.string()
        })
    )
});
