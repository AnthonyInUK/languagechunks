export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>;


export type ProfileCardProps = {
    image: string;
    id: string;
    name: string;
    email: string;
};

export type TopicCardProps = {
    id: string;
    name: string;
    nameInChinese: string | null;
    topicImage: string
};


