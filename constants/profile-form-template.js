const profileFormTemplate = [
    {
        label: 'General',
        fields: [
            {
                id: 'general',
                fields: [
                    { id: 'name', label: 'Full name', type: 'text' },
                    { id: 'title', label: 'Job title', type: 'text' },
                    { id: 'about', label: 'About', type: 'textarea' }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        fields: [
            {
                id: 'contactPhone',
                fields: [{ id: 'phone', label: 'Phone', type: 'tel' }]
            },
            {
                id: 'contactLocation',
                label: 'Location',
                fields: [
                    { id: 'country', label: 'Country', type: 'text' },
                    { id: 'city', label: 'City', type: 'text' }
                ]
            },
            {
                id: 'contactSocials',
                label: 'Socials',
                fields: [
                    { id: 'linkedin', label: 'LinkedIn', type: 'text' },
                    { id: 'twitter', label: 'Twitter', type: 'text' },
                    { id: 'facebook', label: 'Facebook', type: 'text' }
                ]
            }
        ]
    },
    {
        label: 'Education',
        fields: [
            {
                id: 'education',
                fields: [
                    { id: 'school', label: 'School', type: 'text' },
                    { id: 'course', label: 'Course', type: 'text' },
                    {
                        id: 'period',
                        label: 'Period',
                        type: 'period',
                        fields: [
                            { id: 'from', type: 'month' },
                            { id: 'to', type: 'month' }
                        ]
                    }
                ],
                isMutable: true,
                addItemLabel: 'Add Education',
                removeItemLabel: 'Remove Education'
            }
        ]
    },
    {
        label: 'Work Experience',
        fields: [
            {
                id: 'experience',
                fields: [
                    { id: 'company', label: 'Company', type: 'text' },
                    { id: 'location', label: 'Location', type: 'text' },
                    {
                        id: 'period',
                        label: 'Period',
                        type: 'period',
                        fields: [
                            { id: 'from', type: 'month' },
                            { id: 'to', type: 'month' }
                        ]
                    },
                    {
                        id: 'description',
                        label: 'Description',
                        type: 'textarea'
                    }
                ],
                isMutable: true,
                addItemLabel: 'Add Work Experience',
                removeItemLabel: 'Remove Work Experience'
            }
        ]
    },
    {
        label: 'Projects',
        fields: [
            {
                id: 'projects',
                fields: [
                    { id: 'project', label: 'Name', type: 'text' },
                    { id: 'repository', label: 'Repository', type: 'text' },
                    {
                        id: 'description',
                        label: 'Description',
                        type: 'textarea'
                    }
                ],
                isMutable: true,
                addItemLabel: 'Add Project',
                removeItemLabel: 'Remove Project'
            }
        ]
    }
];

export default profileFormTemplate;
