import EmptyList from "@/components/home/EmptyList";
import TopicList from "@/components/home/TopicList";
import { fetchFavourites } from "@/utils/actions";

async function page() {
    const favourites = await fetchFavourites()
    if (favourites.length === 0) {
        return <EmptyList />
    }
  return <TopicList topics={favourites} />
}

export default page

