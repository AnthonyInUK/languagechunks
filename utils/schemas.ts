import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
    //firstName: z.string().max(5, { message: 'max length is 5' }),
    firstName: z.string().min(2, {
        message: 'first name must be at least 2 characters'
    }),
    lastName: z.string().min(2, {
        message: 'last name must be at least 2 characters'
    }),
    username: z.string().min(2, {
        message: 'user name must be at least 2 characters'
    }),

});


export function validateWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data);

    if (!result.success) {
        const errors = result.error.errors.map((error) => error.message);
        throw new Error(errors.join(','));
    }
    return result.data;
}

export const imageSchema = z.object({
    image: validateFile(),
})

function validateFile() {
    const maxUploadSize = 1024 * 1024;
    const acceptedFilesTypes = ['image/'];
    return z
        .instanceof(File)
        .refine((file) => {
            return !file || file.size <= maxUploadSize;
        }, 'File size must be less than 1 MB')
        .refine((file) => {
            return (
                !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
            );
        }, 'File must be an image');
}

export const categoriesSchema = z.object({
    categories: z.array(z.string().min(1, "Category name cannot be empty")),
});

export const topicSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: 'Name cannot be empty' }),
    nameInChinese: z.string().min(1, { message: 'Name in Chinese cannot be empty' }),
})
