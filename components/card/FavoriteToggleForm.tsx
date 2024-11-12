'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { toggleFavouriteAction } from '@/utils/actions';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
    topicId: string;
    favouriteId: string | null;
};

function FavoriteToggleForm({
    topicId,
    favouriteId,
}: FavoriteToggleFormProps) {
    const pathname = usePathname();
    const toggleAction = toggleFavouriteAction.bind(null, {
        topicId,
        favouriteId,
        pathname: pathname || "",
    });
    return (
        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavorite={favouriteId ? true : false} />
        </FormContainer>
    );
}

export default FavoriteToggleForm
