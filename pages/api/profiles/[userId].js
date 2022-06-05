import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        // Get profile
        case 'GET':
            res.status(200).json(
                await prisma.profile.findUnique({
                    where: { userId: req.query.userId }
                })
            );
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
