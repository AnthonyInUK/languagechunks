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
                        return <Link key={item.name} href={`/${item.id}`}>
                            <article className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${isActive ? 'text-primary' : ''
                                }`}>
                                <p className='capitalize text-sm mt-1'>{item.name}</p>
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