import ProfileFormSubsection from '../profile-form-subsection';

const ProfileFormSection = ({ defaultValues, fields, label }) => (
    <div className="flex flex-grow basis-5/12 flex-col items-start gap-3">
        <h2 className="text-2xl font-semibold">{label}</h2>
        {fields.map(field => {
            const values = field.isMutable
                ? defaultValues[field.id]
                : defaultValues;

            return (
                <ProfileFormSubsection
                    defaultValues={values}
                    key={field.id + field.count}
                    {...field}
                />
            );
        })}
    </div>
);

export default ProfileFormSection;
