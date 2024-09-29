let comments = [
  { id: 1234123412, comment: "This is a great post!" },
  { id: 2345234523, comment: "I completely agree with your point of view." },
  { id: 3456345634, comment: "Could you provide more details on this topic?" },
  { id: 4567456745, comment: "Thanks for sharing this!" },
  {
    id: 5678567856,
    comment: "Interesting perspective, but I think there's more to consider.",
  },
  { id: 6789678967, comment: "I learned something new today, thank you." },
  {
    id: 7890789078,
    comment: "Can you share the sources for this information?",
  },
  { id: 8901890189, comment: "I found this article very insightful." },
  {
    id: 9012901290,
    comment: "I have a question regarding the methodology used.",
  },
  {
    id: 1123112311,
    comment: "Great write-up! Looking forward to more posts like this.",
  },
  {
    id: 2234223422,
    comment:
      "I don't fully agree with your argument, but it's thought-provoking.",
  },
  { id: 3345334533, comment: "Can you clarify your last point?" },
  { id: 4456445644, comment: "This is exactly what I was looking for!" },
  { id: 5567556755, comment: "Keep up the great work!" },
  {
    id: 6678667866,
    comment: "Your explanation is very clear and easy to understand.",
  },
  {
    id: 7789778977,
    comment: "I disagree with this, but I respect your opinion.",
  },
  {
    id: 8890889088,
    comment: "Could you provide examples to support your claims?",
  },
  {
    id: 9901990199,
    comment: "This is one of the best articles I’ve read on this subject.",
  },
  {
    id: 1012101210,
    comment: "I’ve shared this with my colleagues, it’s very useful.",
  },
  {
    id: 1113111311,
    comment: "I think this could benefit from a deeper dive into the subject.",
  },
];

export const getAllComments = async () => comments;
export const getCommentById = async (id) => comments.find((c) => c.id == id);
export const createComment = async (comment) => comments.push(comment);
export const editComment = async (id, comment) => {
  comments = comments.map((c) => {
    if (c.id === id) {
      return { id: id, comment };
    }
    return c;
  });
  return {
    id,
    comment,
  };
};
export const deleteComment = async (id) => {
  comments = comments.filter((c) => c.id !== id);
};
