import { fetchAllProfile } from '@/utils/actions';
import ProfilesList from './TopicList';
import EmptyList from './EmptyList';
import type { ProfileCardProps } from '@/utils/types';

async function ProfilesContainer() {
  const profiles: ProfileCardProps[] = await fetchAllProfile();
  if (profiles.length === 0) {
    return <EmptyList heading="No results." message='Try changing or removing some of your filters.'
      btnText='Clear Filters' />
  }
  return (
    <ProfilesList properties={profiles} />
  )
}

export default ProfilesContainer
