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

    const initialValues = {
        education: [],
        experience: [],
        projects: [],
        ...profile
    };

    const onSubmit = async body => {
        const { id, education, experience, projects, ...rest } = body;
        const data = { ...rest, userId: user.id };

        mutate(
            `/api/profiles/${user.id}`,
            fetcher('/api/profiles', {
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
        );
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={profileFormSchema}
        >
            {({ values }) => (
                <Form id="form" className="grid grid-flow-row w-full gap-x-40 gap-y-12 lg:grid-cols-2 lg:grid-flow-row-dense">
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
