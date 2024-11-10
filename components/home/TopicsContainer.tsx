import { fetchTopics } from "@/utils/actions";
import EmptyList from "./EmptyList";
import TopicList from "./TopicList";

async function TopicsContainer({ category, search, }: { category?: string, search?: string }) {
    const categoryValue = category ?? '';
    const searchValue = search ?? '';
    const topicLists = await fetchTopics({ category: categoryValue, search: searchValue });
    if (topicLists.length == 0) {
        return <EmptyList heading="No results." message='Try changing or removing some of your filters.'
            btnText='Clear Filters' />
    }
    return (
        <TopicList topics={topicLists} />
    )
}

export default TopicsContainer
