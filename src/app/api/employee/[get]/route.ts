import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { get: string } }) {
  const userId = params.get
  try {
    const employee = await prisma.employee.findMany({
      where: {
        userId: 4,
      },
    })
    return NextResponse.json(employee, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
