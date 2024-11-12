import TopicCard from '../card/TopicCard';
import type { TopicCardProps } from '@/utils/types';


function TopicList({ topics }: { topics: TopicCardProps[] }) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {topics.map((topic) => {
        return <TopicCard key={topic.id} topic={topic} />
      })}
    </section>
  )
}


export default TopicList
