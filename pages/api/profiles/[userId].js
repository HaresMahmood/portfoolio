import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
    const { method } = req;
    const { userId } = req.query;

    switch (method) {
        // Get profile
        case 'GET':
            res.status(200).json(
                await prisma.profile.findUnique({
                    where: { userId }
                })
            );
            break;
        // Update profile
        case 'PUT':
            const data = req.body;

            res.status(200).json(
                await prisma.profile.update({
                    where: { userId },
                    data
                })
            );
            break;
        default:
            res.setHeader('Allow', ['GET, PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
