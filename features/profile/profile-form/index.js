import { Form, Formik } from 'formik';

import ProfileFormSection from './profile-form-section';
import fetcher from '../../../lib/fetcher';
import { profileFormSchema } from '../../../constants/profile-form-schema';
import profileFormTemplate from '../../../constants/profile-form-template';
import { useSWRConfig } from 'swr';
import { useUserProfile } from '../../../hooks/use-user-profile';

const ProfileForm = () => {
    const { user, profile } = useUserProfile();
    const { mutate } = useSWRConfig();

    const onSubmit = async body => {
        mutate(
            `/api/profiles/${user.id}`,
            fetcher(`/api/profiles/${user.id}`, {
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
        );
    };

    return (
        <Formik
            initialValues={profile}
            onSubmit={onSubmit}
            validationSchema={profileFormSchema}
        >
            {({ values }) => (
                <Form
                    id="form"
                    className="grid w-full grid-flow-row gap-x-40 gap-y-12 lg:grid-flow-row-dense lg:grid-cols-2"
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
