import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavouriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';


async function FavoriteToggleButton({ topicId }: { topicId: string }) {

  const { userId } = auth();
  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavouriteId({ topicId });
    return (
    <FavoriteToggleForm favouriteId={favoriteId} topicId={topicId} />
  )
}

export default FavoriteToggleButton
