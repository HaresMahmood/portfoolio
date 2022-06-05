import { Form, Formik } from 'formik';

import ProfileFormSection from './profile-form-section';
import { profileFormSchema } from '../../../constants/profile-form-schema';
import profileFormTemplate from '../../../constants/profile-form-template';
import user from '../../../mocks/user';

const ProfileForm = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={user}
            onSubmit={onSubmit}
            validationSchema={profileFormSchema}
        >
            {({ values }) => (
                <Form id="form" className="flex w-full flex-row flex-wrap items-start gap-x-40 gap-y-12">
                    {profileFormTemplate.map(section => (
                        <ProfileFormSection
                            defaultValues={values}
                            key={section.label}
                            {...section}
                        />
                    ))}
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm;
