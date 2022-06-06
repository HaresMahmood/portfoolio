import { FieldArray } from 'formik';
import { Fragment } from 'react';
import ProfileFormField from '../profile-form-field';
import Button from '../../../../components/button';
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
            {label && <div className="w-full border-t-2 border-gray-500"></div>}
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
                                        <Button
                                            className="bg-none text-red-400 hover:text-red-600 ring-red-600 hover:bg-gray-100"
                                            onClick={() => remove(index)}
                                            type="button"
                                        >
                                            - {removeItemLabel}
                                        </Button>
                                    </Fragment>
                                ))}
                            <Button
                                className="bg-none text-gray600 hover:bg-gray-100"
                                onClick={() => push(emptyItem)}
                                type="button"
                            >
                                + {addItemLabel}
                            </Button>
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
