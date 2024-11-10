'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';
function NavSearch() {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const [search, setSearch] = useState(searchParams?.get('search')?.toString() ?? '');
    const handleSearch = useDebouncedCallback((value: string) => {
        if (searchParams) {
            const params = new URLSearchParams(searchParams)
            if (value) {
                params.set('search', value);
            } else {
                params.delete('search')
            }
            replace(`/?${params.toString()}`)
        }
    }, 500);
    useEffect(() => {
        if (!searchParams?.get('search')) {
            setSearch('');
        }
    }, [searchParams?.get('search')]);
    return (
        <Input className="max-w-xs dark:bg-muted" placeholder="find a property..." type="text" onChange={(e) => { setSearch(e.target.value); handleSearch(e.target.value) }} value={search} />
    )
}
export default NavSearch