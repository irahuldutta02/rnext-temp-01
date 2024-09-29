import { createComment } from "@/app/data/comments";

export async function POST(request) {
  try {
    const { text } = await request.json();

    const newComment = {
      id: Date.now(),
      comment: text,
    };

    await createComment(newComment);

    const message = {
      status: 201,
      data: newComment,
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
