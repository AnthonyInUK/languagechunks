import { SubmitButton } from "@/components/form/Buttons";
import { fetchTopicById, updateTopicImageAction, updateTopic } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';
async function page() {
    const id = '01e143d2-eec2-4058-957a-85e09c08a37d';
    const topic = await fetchTopicById(id)
    if (!topic) {
        return <p>Topic not found</p>
    }
    return <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>user profile</h1>
        <div className='border p-8 rounded-md'>
            <ImageInputContainer
                image={topic.topicImage}
                name={topic.name}
                action={updateTopicImageAction}
                text="Update Profile Image"
                id={id}
            />
            <FormContainer action={updateTopic}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <FormInput type="hidden" name="id" defaultValue={id} />
                    <FormInput type="text" name="name" label="name" defaultValue={topic.name} />
                    <FormInput type="text" name="nameInChinese" label="nameInChinese" defaultValue={topic.nameInChinese ?? undefined} />
                </div>
                <SubmitButton text="Update Profile" className="mt-8" />
            </FormContainer>
        </div>
    </section>
}

export default page
