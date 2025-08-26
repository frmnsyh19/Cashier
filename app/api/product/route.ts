import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // const datas = await prisma.product.findMany({
    //   include: {
    //     category: true,
    //   },
    // });

    const datas = await prisma.category.findMany({
      where: {
        product: {
          some: {},
        },
      },
      include: {
        product: true,
      },
    });

    console.log({ datas });

    return NextResponse.json(
      {
        datas,
        statusCode: 200,
        message: "Getting data product success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        statusCode: 500,
        message: "Internal Server Error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { image, nama, category_id, price } = body;
    // Validasi input

    const resultPrice = Number(String(price).replace(/[$,]/g, ""));
    if (isNaN(resultPrice)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format harga tidak valid",
        },
        { status: 400 }
      );
    }
    const lastSale = await prisma.product.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    const countSale = (lastSale?.sale ?? 0) + 1;
    await prisma.product.create({
      data: {
        nama: String(nama),
        image: String(image),
        price: resultPrice,
        category_id: Number(category_id),
        sale: countSale,
      },
    });
    return NextResponse.json(
      {
        success: true,
        statusCode: 200,
        message: "Success add data",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat memproses permintaan",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
