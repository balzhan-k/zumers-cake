import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  // The SDK has been installed, now we'll implement the upload logic.
  // The 'put' function from '@vercel/blob' handles the actual upload.
  // We need to ensure that 'req.body' is a readable stream.
  // Also, we'll set the access to 'public' so the image can be viewed.
  try {
    const blob = await put(filename!, req.body!, {
      access: "public",
      addRandomSuffix: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error("Vercel Blob upload failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload photo" },
      { status: 500 }
    );
  }
}
