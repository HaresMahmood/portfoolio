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
                <Form 
                    id="form" 
                    className="w-full maxmd:flex maxmd:flex-col"
                    style={{ columnCount: `2`, columnGap: `10rem` }}
                >
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
