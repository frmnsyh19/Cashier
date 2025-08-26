import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await prisma.category.findMany();

    return NextResponse.json(
      {
        statusCode: 200,
        success: true,
        datas,
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
