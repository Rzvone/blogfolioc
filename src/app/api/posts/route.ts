import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';


export const GET = async (req) => {

    const { searchParams } = new URL(req.nextUrl)

    const page = Number(searchParams.get('page')) || 1;


    const POST_PER_PAGE = 4

    const query = {
        take: POST_PER_PAGE,
        skip: (page - 1) * POST_PER_PAGE,
    }


    try {



        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ])

        return new NextResponse(JSON.stringify({posts, count ,  status: 200}))
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong', status: 500}))
    }
}