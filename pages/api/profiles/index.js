import prisma from '../../../lib/prisma';

let data;

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        // Create or update new profile
        case 'POST':
            data = req.body;
            res.status(200).json(
                await prisma.profile.upsert({
                    where: { userId: data.userId },
                    update: data,
                    create: data
                })
            );
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
