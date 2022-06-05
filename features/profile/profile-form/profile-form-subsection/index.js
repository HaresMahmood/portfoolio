import { FieldArray } from 'formik';
import { Fragment } from 'react';
import ProfileFormField from '../profile-form-field';
import cuid from 'cuid';

const Field = ({ field, name }) => (
    <div className="flex w-full flex-row items-center justify-between">
        <ProfileFormField name={name} {...field} />
    </div>
);

const ProfileFormSubsection = ({
    addItemLabel,
    defaultValues,
    fields,
    id,
    isMutable,
    label,
    removeItemLabel
}) => {
    const emptyItem = {
        ...fields.reduce(
            (item, field) => ({
                ...item,
                [field.id]: ''
            }),
            {}
        ),
        id: cuid()
    };

    return (
        <>
            {label && <h3 className="text-lg font-semibold">{label}</h3>}
            {isMutable ? (
                <FieldArray name={id}>
                    {({ remove, push }) => (
                        <>
                            {!!defaultValues.length &&
                                defaultValues.map(({ id: itemId }, index) => (
                                    <Fragment key={itemId}>
                                        {fields.map(field => (
                                            <Field
                                                defaultValue={
                                                    defaultValues[index][
                                                        field.id
                                                    ]
                                                }
                                                field={field}
                                                key={field.id}
                                                name={`${id}.${index}.${field.id}`}
                                            />
                                        ))}
                                        {defaultValues.length > 1 && (
                                            <button
                                                className="font-semibold text-gray-600 hover:text-gray-800"
                                                onClick={() => remove(index)}
                                                type="button"
                                            >
                                                - {removeItemLabel}
                                            </button>
                                        )}
                                    </Fragment>
                                ))}
                            <button
                                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                onClick={() => push(emptyItem)}
                                type="button"
                            >
                                + {addItemLabel}
                            </button>
                        </>
                    )}
                </FieldArray>
            ) : (
                <>
                    {fields.map(field => (
                        <Field
                            defaultValue={defaultValues[field.id]}
                            field={field}
                            name={field.id}
                            key={field.id}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default ProfileFormSubsection;
