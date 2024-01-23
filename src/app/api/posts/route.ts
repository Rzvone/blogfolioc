import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req: { url: string | URL }) => {

    const { searchParams } = new URL(req.url)

    const page = Number(searchParams.get('page')) || 1;
    const cat = searchParams.get('cat') || null;


    const POST_PER_PAGE = 4

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
        ...(cat && { catSlug: cat}),
      }
    }


    try {

        const [posts, count] = await prisma.$transaction([
          prisma.post.findMany(query),
          prisma.post.count()
        ])

        return new NextResponse(JSON.stringify({posts, count,  status: 200}))
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong', status: 500}))
    }
}