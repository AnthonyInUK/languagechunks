import CategoriesList from '@/components/home/CategoriesList'
import ProfilesContainer from '@/components/home/ProfilesContainer'


function FetchProfilesPage({ searchParams }: { searchParams: { category?: string, search?: string } }) {
    console.log(searchParams)
    return (
        <section>
            <CategoriesList category={searchParams.category}
                search={searchParams.search} />
            <ProfilesContainer />
        </section>
    )
}

export default FetchProfilesPage
