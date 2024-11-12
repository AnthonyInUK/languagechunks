import Image from 'next/image';
import Link from 'next/link';
import FavoriteToggleButton from './FavoriteToggleButton';
import { TopicCardProps } from '@/utils/types';


function TopicCard({ topic }: { topic: TopicCardProps }) {
    const { name, nameInChinese, id: topicId, topicImage } = topic

    return (
        <article className='group relative'>
            <Link href={`/topics/${topicId}`}>
                <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
                    <Image
                        src={topicImage}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt={name}
                        className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500'
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm font-semibold mt-1'>
                        {name.substring(0, 30)}
                    </h3>
                    {/* property rating */}
                </div>
                <p className='text-sm mt-1 text-muted-foreground '>
                    {nameInChinese}
                </p>
                <div className='flex justify-between items-center mt-1'>
                </div>
            </Link>
            <div className='absolute top-5 right-5 z-5'>
                <FavoriteToggleButton topicId={topicId} />
            </div>
        </article>
    )
}

export default TopicCard
