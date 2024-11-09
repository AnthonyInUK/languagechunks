import { fetchTopics } from "@/utils/actions";
import EmptyList from "./EmptyList";
import TopicList from "./TopicList";

async function TopicsContainer() {
    const topicLists = await fetchTopics({});
    if (topicLists.length == 0) {
        return <EmptyList heading="No results." message='Try changing or removing some of your filters.'
            btnText='Clear Filters' />
    }
    return (
        <TopicList topics={topicLists} />
    )
}

export default TopicsContainer
