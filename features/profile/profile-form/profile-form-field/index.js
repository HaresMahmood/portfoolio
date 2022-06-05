import { ErrorMessage, Field } from 'formik';

const ProfileFormField = ({ label, name, type }) => {
    switch (type) {
        case 'textarea':
            return (
                <>
                    <label
                        className="w-28 font-medium text-gray-900"
                        htmlFor={name}
                    >
                        {label}
                    </label>
                    <div className="w-2/3">
                        <Field
                            as="textarea"
                            className="w-full appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                            name={name}
                            rows={3}
                        />
                        <ErrorMessage
                            className="text-xs text-red-600"
                            name={name}
                            component="div"
                        />
                    </div>
                </>
            );
        case 'period':
            return (
                <>
                    <label
                        className="w-28 font-medium text-gray-900"
                        htmlFor={name}
                    >
                        Period
                    </label>
                    <div className="flex w-2/3 flex-row flex-wrap items-center gap-3">
                        <div className="flex flex-row items-center gap-3 w-full">
                            <p className="text-xs"> To </p>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="w-full space-y-1">
                                    <Field
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        name={`${name}.from`}
                                        type="month"
                                    />
                                    <ErrorMessage
                                        name={`${name}.from`}
                                        className="text-xs text-red-600"
                                        component="div"
                                    />
                                </div>
                                <div className="w-full space-y-1">
                                    <Field
                                        className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                                        name={`${name}.to`}
                                        type="month"
                                    />
                                    <ErrorMessage
                                        name={`${name}.to`}
                                        className="text-xs text-red-600"
                                        component="div"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <label className="font-medium" htmlFor={name}>
                        {label}
                    </label>
                    <div className="w-2/3 space-y-1">
                        <Field
                            className="w-full appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                            name={name}
                            type={type}
                        />
                        <ErrorMessage
                            className="text-xs text-red-600"
                            name={name}
                            component="div"
                        />
                    </div>
                </>
            );
    }
};

export default ProfileFormField;
