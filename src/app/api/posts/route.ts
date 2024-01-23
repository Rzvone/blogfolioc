import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async ({ req }: any) => {
  try {
    // Use optional chaining to safely access nested properties
    const nextUrl = req?.nextUrl;

    if (!nextUrl) {
      // Handle the case where req.nextUrl is undefined
      return new NextResponse(JSON.stringify({ message: 'nextUrl is undefined', status: 400 }));
    }

    const { searchParams } = new URL(nextUrl);

    const page = Number(searchParams.get('page')) || 1;

    const POST_PER_PAGE = 4;

    const query = {
      take: POST_PER_PAGE,
      skip: (page - 1) * POST_PER_PAGE,
    };

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify({ posts, count, status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong', status: 500 }));
  }
};
