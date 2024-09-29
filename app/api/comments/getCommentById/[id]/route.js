import { getCommentById } from "@/app/data/comments";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = parseInt(await params?.id);

    const comment = await getCommentById(id);
    if (!comment) {
      // redirect();
      redirect("/api/comments/getAllComments");
    }

    const message = {
      status: 200,
      data: comment,
    };

    return new Response(JSON.stringify(message), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const message = {
      status: 500,
      data: error?.message,
      stack: error?.stack,
    };
    return new Response(JSON.stringify(message), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
