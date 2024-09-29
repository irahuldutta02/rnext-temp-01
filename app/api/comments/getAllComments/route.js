import { getAllComments } from "@/app/data/comments";

export async function GET() {
  try {
    const comments = await getAllComments();

    const message = {
      status: 200,
      data: comments,
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
