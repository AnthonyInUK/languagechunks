'use client';
import { act, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';
import { type actionFunction } from '../../utils/types';
import { LuUser2 } from 'react-icons/lu';

type ImageInputContainerProps = {
    image: string;
    name: string;
    action: actionFunction;
    id?: string; // 新增的 id 属性
    text: string;
};

function ImageInputContainer(props: ImageInputContainerProps) {
    const { image, name, action, text, id } = props;
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
    const userIcon = (
        <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
    );
    return (
        <div>
            {image ? (
                <Image
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded object-cover mb-4 w-24 h-24"
                />
            ) : (
                userIcon
            )}
            <Button variant="outline" size="sm" onClick={() => setUpdateFormVisible((prev) => !prev)}>
                {text}
            </Button>
            {isUpdateFormVisible && (
                <div className="max-w-lg mt-4">
                    <FormContainer action={action}>
                        {id && <input type="hidden" name="id" value={id} />}
                        <ImageInput />
                        <SubmitButton size="sm" />
                    </FormContainer>
                </div>
            )}
        </div>
    );
}

export default ImageInputContainer;
