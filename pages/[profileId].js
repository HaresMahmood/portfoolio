import BasicPortfolioTemplate from '../features/portfolio-template/basic';
import prisma from '../lib/prisma';

const PortfolioPage = ({ profile }) => (
    <BasicPortfolioTemplate profile={profile} />
);

export default PortfolioPage;

export const getServerSideProps = async context => {
    const { profileId } = context.query;

    const profile = await prisma.profile.findUnique({
        where: { id: profileId }
    });

    if (profile) {
        return { props: { profile } };
    }

    return { notFound: true };
};
