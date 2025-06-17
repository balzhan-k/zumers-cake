import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  // The SDK has been installed, now we'll implement the upload logic.
  // The 'put' function from '@vercel/blob' handles the actual upload.
  // We need to ensure that 'req.body' is a readable stream.
  // Also, we'll set the access to 'public' so the image can be viewed.
  const blob = await put(filename!, req.body!, {
    access: "public",
  });

  return NextResponse.json(blob);
}
