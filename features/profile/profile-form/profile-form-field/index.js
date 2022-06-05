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
                    <Field
                        as="textarea"
                        className="w-2/3 appearance-none rounded-3xl border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                        name={name}
                        rows={3}
                    />
                    <ErrorMessage
                        className="text-xs"
                        name={name}
                        component="div"
                    />
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
                    <div className="flex w-2/3 flex-row items-center gap-3">
                        <Field
                            className="w-3/4 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                            name={`${name}.from`}
                            type="month"
                        />
                        <ErrorMessage
                            name={`${name}.from`}
                            className="text-xs"
                            component="div"
                        />
                        <div className="h-0.5 w-12 bg-gray-900" />
                        <Field
                            className="w-3/4 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                            name={`${name}.to`}
                            type="month"
                        />
                        <ErrorMessage
                            name={`${name}.to`}
                            className="text-xs"
                            component="div"
                        />
                    </div>
                </>
            );
        default:
            return (
                <>
                    <label className="font-medium" htmlFor={name}>
                        {label}
                    </label>
                    <Field
                        className="w-2/3 appearance-none rounded-full border-2 border-gray-500 bg-transparent px-4 py-2 font-medium text-gray-500 focus:text-gray-900"
                        name={name}
                        type={type}
                    />
                    <ErrorMessage
                        className="text-xs"
                        name={name}
                        component="div"
                    />
                </>
            );
    }
};

export default ProfileFormField;
