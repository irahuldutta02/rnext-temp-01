import { editComment, getCommentById } from "@/app/data/comments";

export async function PATCH(request, { params }) {
  try {
    const id = parseInt(await params?.id);
    const { text } = await request.json();

    const comment = await getCommentById(id);
    if (!comment) {
      const message = {
        status: 404,
        data: "comment not found",
      };
      return new Response(JSON.stringify(message), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const updatedComment = await editComment(id, text);

    const message = {
      status: 200,
      data: updatedComment,
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
