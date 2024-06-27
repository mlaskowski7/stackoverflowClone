import { z } from "zod";

export const QuestionFormSchema = z.object({
  title: z.string().min(5, "Title must contain at least 5 characters").max(130),
  description: z
    .string()
    .min(
      50,
      "The provided description is too short, a description must contain of at least 100 words"
    ),
  tags: z.array(z.string().min(1).max(15)).min(1).max(4),
});

export const AnswerSchema = z.object({
  answer: z.string().min(100),
});
