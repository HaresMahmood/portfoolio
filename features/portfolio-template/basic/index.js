import Head from 'next/head';
import Image from '../../../components/image';
import { formatDate } from '../../../utils';
import styles from '../../../styles/basic.module.css';

const BasicPortfolioTemplate = ({ profile }) => {
    const {
        about,
        name,
        image,
        email,
        title,
        city,
        country,
        phone,
        education,
        experience,
        projects,
        facebook,
        twitter,
        linkedin
    } = profile;

    return (
        <main className={styles.basic}>
            <Head>
                <title>{name}</title>
                <link
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Head>
            <div className="mt-4">
                <div className="w3-content" style={{ maxWidth: '1400px' }}>
                    <div className="w3-row-padding">
                        <div className="w3-third">
                            <div className="w3-white w3-text-grey w3-card-4">
                                <div className="w3-display-container">
                                    <Image
                                        src={image}
                                        style={{ width: '100%' }}
                                        alt="Avatar"
                                        priority
                                    />
                                    <div className="w3-display-bottomleft w3-container w3-text-white">
                                        <h2>{name}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <p>
                                        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                                        {title}
                                    </p>
                                    {city && country && (
                                        <p>
                                            <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                                            {city}, {country}
                                        </p>
                                    )}
                                    {email && (
                                        <p>
                                            <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                                            {email}
                                        </p>
                                    )}
                                    {phone && (
                                        <p>
                                            <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                                            {phone}
                                        </p>
                                    )}
                                    <hr />
                                    {about && (
                                        <>
                                            <p className="w3-large">
                                                <b>
                                                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                                                    About
                                                </b>
                                            </p>
                                            <p>{about}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="w3-twothird">
                            <div className="w3-container w3-card w3-white w3-margin-bottom">
                                <h2 className="w3-text-grey w3-padding-16">
                                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                                    Work Experience
                                </h2>
                                {experience.map(
                                    ({
                                        id,
                                        role,
                                        company,
                                        location,
                                        period,
                                        description
                                    }) => (
                                        <div key={id}>
                                            <h5 className="w3-opacity">
                                                <b>
                                                    {role} / {company}
                                                </b>
                                            </h5>
                                            <div className="flex gap-6">
                                                {period && (
                                                    <div>
                                                        <h6 className="w3-text-teal">
                                                            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                                                            {formatDate(
                                                                period.from
                                                            )}{' '}
                                                            -{' '}
                                                            {formatDate(
                                                                period.to
                                                            )}
                                                        </h6>
                                                    </div>
                                                )}
                                                {location && (
                                                    <div>
                                                        <h6 className="w3-text-teal">
                                                            <i className="fa fa-map-marker fa-fw w3-margin-right"></i>
                                                            {location}
                                                        </h6>
                                                    </div>
                                                )}
                                            </div>
                                            {description && (
                                                <p>{description}</p>
                                            )}
                                            <hr />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="w3-container w3-card w3-white w3-margin-bottom">
                                <h2 className="w3-text-grey w3-padding-16">
                                    <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                                    Education
                                </h2>
                                {education.map(
                                    ({ id, school, course, period }) => (
                                        <div className="w3-container" key={id}>
                                            {school && (
                                                <h5 className="w3-opacity">
                                                    <b>{school}</b>
                                                </h5>
                                            )}
                                            {period && (
                                                <h6 className="w3-text-teal">
                                                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                                                    {formatDate(period.from)} -{' '}
                                                    {formatDate(period.to)}
                                                </h6>
                                            )}
                                            {course && <p>{course}</p>}
                                            <hr />
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="w3-container w3-card w3-white">
                                <h2 className="w3-text-grey w3-padding-16">
                                    <i className="fa fa-code fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                                    Projects
                                </h2>
                                {projects.map(
                                    ({
                                        id,
                                        project,
                                        repository,
                                        description
                                    }) => (
                                        <div className="w3-container" key={id}>
                                            {project && (
                                                <h5 className="w3-opacity">
                                                    <b>{project}</b>
                                                </h5>
                                            )}
                                            {repository && (
                                                <h6 className="w3-text-teal">
                                                    <a href={repository}>
                                                        <i className="fa fa-link fa-fw w3-margin-right"></i>
                                                        {repository}
                                                    </a>
                                                </h6>
                                            )}
                                            {description && (
                                                <p>{description}</p>
                                            )}
                                            <hr />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="w3-container w3-teal w3-center mt-6 py-4">
                    <p>Find me on social media:</p>
                    <div className="flex justify-center gap-2">
                        {facebook && (
                            <a href={facebook}>
                                <i className="fa fa-facebook-official w3-hover-opacity"></i>
                            </a>
                        )}
                        {twitter && (
                            <a href={twitter}>
                                <i className="fa fa-twitter w3-hover-opacity"></i>
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin}>
                                <i className="fa fa-linkedin w3-hover-opacity"></i>
                            </a>
                        )}
                    </div>
                </footer>
            </div>
        </main>
    );
};

export default BasicPortfolioTemplate;
