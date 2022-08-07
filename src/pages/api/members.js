import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    await getSession({ req });
    if (req.method === 'POST') {
        const { body } = req;
        const { user, discordId, osrsName, points, splits } = JSON.parse(
            JSON.stringify(body)
        );
        const member = {
            user: user,
            discordId: discordId,
            osrsName: osrsName,
            points: parseInt(points),
            splits: parseInt(splits),
        };
        const members = await prisma.members.create({
            data: member,
        });
        return res.status(200).json(members);
    }
    res.end();
};

export default handler;
