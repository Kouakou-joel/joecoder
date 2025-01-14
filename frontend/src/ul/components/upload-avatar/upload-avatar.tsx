import React, { ChangeEvent } from 'react';

interface UploadAvatarProps {
    handleImageSelect: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadAvatar: React.FC<UploadAvatarProps> = ({ handleImageSelect }) => {
    return (
        <input type="file" onChange={handleImageSelect} />
    );
};