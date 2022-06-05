import ProfileFormSubsection from '../profile-form-subsection';

const ProfileFormSection = ({
    defaultValues,
    fields,
    label,
    onAddItemButtonClick,
    onRemoveItemButtonClick
}) => (
    <div className="flex flex-col items-start gap-3">
        <h2 className="text-2xl font-semibold">{label}</h2>
        {fields.map(field => {
            const values = field.isMutable
                ? defaultValues[field.id]
                : defaultValues;

            return (
                <ProfileFormSubsection
                    defaultValues={values}
                    key={field.id + field.count}
                    onAddItemButtonClick={onAddItemButtonClick}
                    onRemoveItemButtonClick={onRemoveItemButtonClick}
                    {...field}
                />
            );
        })}
    </div>
);

export default ProfileFormSection;
