import { fetchCategories } from '@/utils/actions';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Link from 'next/link';


async function CategoriesList({ category, search }: { category?: string, search?: string }) {
    const categories = await fetchCategories();
    return (
        <section>
            <ScrollArea className='py-6'>
                <div className="flex gap-x-4 items-center justify-center">
                    {categories.map((item) => {
                        const isActive = item.name === category
                        return <Link key={item.name} href={`/test/${item.id}`}>
                            <article className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-auto ${isActive ? 'text-primary' : ''
                                }`}>
                                <p className='capitalize text-lg mt-1 whitespace-nowrap overflow-hidden text-ellipsis w-full'>{item.name}</p>
                            </article>
                        </Link>
                    })}
                </div>
                <ScrollBar orientation='horizontal' />
            </ScrollArea>
        </section>
    )
}
export default CategoriesList