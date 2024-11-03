import PropertyCard from '../card/PropertyCard';
import type { ProfileCardProps } from '@/utils/types';


function ProfilesList({ properties }: { properties: ProfileCardProps[] }) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{properties.map((profile) => {
      return <PropertyCard key={profile.id} profile={profile} />
    })}</section>
  )
}

export default ProfilesList
