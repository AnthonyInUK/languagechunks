import { fetchTopics } from "@/utils/actions";
import Link from 'next/link';


async function page({ params }: { params: { id: string } }) {
    console.log("this is your topic", params.id)
    const topics = await fetchTopics({ category: params.id })

    return (
        <section className="container mx-auto p-6">
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-md p-4">
                {topics.length > 0 ? (
                    topics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-gray-200 py-4 hover:bg-gray-100 transition duration-150 ease-in-out">
                            <div className="flex-1">
                                <Link href={`/topic/${topic.id}`}>
                                    <div className="text-blue-600 hover:underline font-semibold">{topic.name}</div>
                                </Link>
                            </div>
                            <div className="flex-1 text-gray-700">
                                {topic.nameInChinese || "-"}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-4 text-center text-gray-500">
                        No topics available.
                    </div>
                )}
            </div>
        </section>
    );
}

export default page
