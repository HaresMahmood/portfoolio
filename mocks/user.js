const user = {
    name: 'John Doe',
    title: 'Software Engineer',
    about: 'Lorem ipsum',
    phone: '',
    country: 'Mexico',
    city: 'Mexico City',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    education: [
        {
            id: '3ba87344-5594-446c-b537-cd39228086dc',
            school: 'ITESM',
            course: 'Computer Science',
            period: {
                from: '2017-08',
                to: '2022-06'
            }
        },
        {
            id: 'ad078bad-4e48-4db4-b07f-20f6b2a7f551',
            school: 'Harvard',
            course: 'Law',
            period: {
                from: '2012-01',
                to: '2014-06'
            }
        }
    ],
    experience: [
        {
            id: '4fc2868f-35b5-44c8-ba27-d7da18f2d383',
            company: '',
            location: '',
            period: {
                from: '',
                to: ''
            },
            description: ''
        }
    ],
    projects: [
        {
            id: 'ef8fc6c5-6e94-48a9-a8fd-711ba6993c27',
            project: 'Google Forms Automation',
            repository: 'github.com',
            description: 'Lorem ipsum'
        }
    ]
};

export default user;
