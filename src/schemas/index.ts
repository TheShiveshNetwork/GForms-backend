import { ObjectId } from "mongodb";
import { z } from "zod";

// Custom validator to check if a value is a valid ObjectId
const objectIdSchema = z.custom<ObjectId>((value) => {
    return ObjectId.isValid(value);
}, {
    message: "Invalid ObjectId",
});

export let SubmitFormSchemaValidator = z.object({
	body: z.object({
		formId     : objectIdSchema,
		name       : z.string(),
		email      : z.string(),
		phone      : z.string(),
		github_link: z.string(),
		timer      : z.string(),
	}),
});

export type SubmitFormRequest = z.infer<typeof SubmitFormSchemaValidator>;

export let CreateFormSchemaValidator = z.object({
	body: z.object({
		fields: z.array(z.string()),
	})
})

export type CreateFormRequest = z.infer<typeof CreateFormSchemaValidator>;

export const GetFormByIdSchema = z.object({
    params: z.object({
        id: objectIdSchema,
    }),
});

export type GetFormByIdRequest = z.infer<typeof GetFormByIdSchema>;

export const GetResponseByIdSchema = z.object({
    params: z.object({
        id: objectIdSchema,
    }),
});

export type GetResponseByIdRequest = z.infer<typeof GetFormByIdSchema>;

export const GetResponseByFormIdSchema = z.object({
    params: z.object({
        id: objectIdSchema,
    }),
});

export type GetResponseByFormIdRequest = z.infer<typeof GetFormByIdSchema>;
