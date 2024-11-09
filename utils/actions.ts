'use server'

import { imageSchema, profileSchema, topicSchema, validateWithZodSchema } from "./schemas";
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { uploadImage } from "./supbase";
import db from './db';
import { type actionFunction } from '../utils/types';

const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error("You must be logged in to access this route");
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create');
    return user;
}

const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return { message: error instanceof Error ? error.message : 'An error occurred' };
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser();
        if (!user) throw new Error("Please login to create a profile");
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(profileSchema, rawData);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            }
        });
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

    } catch (error) {
        return renderError(error);
    }
    redirect('/');
};

export const fetchProfileImage = async () => {
    const user = await currentUser()
    if (!user) return null;
    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id
        },
        select: {
            profileImage: true,
        },
    })
    return profile?.profileImage;
}

export const fetchProfile = async () => {
    const user = await getAuthUser();
    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id
        }
    })
    if (!profile) redirect('/profile/create');
    return profile;
}

export const fetchAllProfile = async () => {
    const profiles = await db.profile.findMany({
        select: {
            id: true,
            profileImage: true,
            email: true,
            firstName: true,
            lastName: true,
        }
    })
    const result = profiles.map(profile => ({
        id: profile.id,
        image: profile.profileImage,
        name: `${profile.firstName} ${profile.lastName}`,
        email: profile.email,
    }));
    return result;
}

export const updateProfileAction = async (prevState: any, formData: FormData)
    : Promise<{ message: string }> => {

    const user = await getAuthUser();
    console.log(user)
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(profileSchema, rawData);
        await db.profile.update({
            where: {
                clerkId: user.id
            },
            data: validatedFields,
        })
        revalidatePath('/profile')
        return { message: 'profile updated sucessfully' };
    } catch (error) {
        return renderError(error);
    }
}

export const updateProfileImageAction = async (
    prevState: any, formData: FormData
) => {
    const user = await getAuthUser();
    try {
        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, { image });
        const fullPath = await uploadImage(validatedFields.image);

        await db.profile.update({
            where: {
                clerkId: user.id,
            },
            data: {
                profileImage: fullPath,
            },
        });
        revalidatePath('/profile');
        return { message: 'Profile image updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};

export const updateTopicImageAction = async (prevState: any, formData: FormData) => {
    try {
        console.log(formData);
        const id = formData.get('id') as string | null;
        if (!id) {
            throw new Error("ID is required to update the topic image.");
        }

        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, { image });
        const fullPath = await uploadImage(validatedFields.image);

        await db.topic.update({
            where: { id },
            data: { topicImage: fullPath },
        });

        revalidatePath('/topics');
        return { message: 'Topic image updated successfully' };
    } catch (error) {
        return renderError(error);
    }
};


export const fetchCategories = async () => {
    const categories = await db.category.findMany({});
    if (!categories) throw new Error("There are no results");
    return categories;
}

export const fetchTopics = async ({ search = '', category }: { search?: string, category?: string }) => {
    const searchString = typeof search === 'string' ? search : '';

    const whereCondition: Record<string, any> = {};
    if (category) {
        whereCondition.categoryId = category;

    }

    if (searchString) {
        whereCondition.OR = [
            { name: { contains: searchString, mode: 'insensitive' } },
            { nameInChinese: { contains: searchString, mode: 'insensitive' } }
        ];
    }
    const topicLists = await db.topic.findMany({
        where: Object.keys(whereCondition).length ? whereCondition : undefined,
        select: {
            id: true,
            name: true,
            nameInChinese: true,
            topicImage: true,
        },
    });
    return topicLists;
};

export const fetchTopicById = async (id: string) => {
    const topic = await db.topic.findUnique({
        where: {
            id,
        },
        select: {
            name: true,
            nameInChinese: true,
            topicImage: true,
        }
    })
    return topic;
}

export const updateTopic = async (prevState: any,
    formData: FormData): Promise<{ message: string }> => {
    try {
        const id = formData.get('id') as string | null;
        if (!id || typeof id !== 'string') {
            throw new Error('Invalid or missing ID');
        }
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(topicSchema, rawData);
        await db.topic.update({
            where: {
                id: id
            },
            data: validatedFields,
        })
        revalidatePath('/topics')
        return { message: 'topic updated sucessfully' };
    } catch (error) {
        return renderError(error);
    }
}

export const fetchLanguageChunks = async (id: string) => {
    const languageChunk = await db.languageChunk.findMany({
        where: {
            id: id
        },
        select: {
            id: true,
            content: true,
            translation: true,
        },
    })
    return languageChunk;
}


