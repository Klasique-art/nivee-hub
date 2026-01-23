import React from 'react';
import Image from "next/image";
import { CurrentUser } from '@/types/user.types';

type Props = {
    user: CurrentUser | null;
};

const placeholderPic = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop";

const ProfileCard: React.FC<Props> = ({ user }) => {
    const fullName = user ? `${user.first_name} ${user.last_name}` : 'Guest User';
    
    return (
        <div
            tabIndex={0}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            role="region"
            aria-label={`User profile: ${fullName}`}
        >
            <Image
                src={user?.profile_picture || placeholderPic}
                alt={`${fullName}'s profile picture`}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400 dark:border-emerald-600 shadow-md"
                draggable={false}
            />
            <div className="hidden md:block">
                <h3 className="small-text font-semibold truncate text-slate-900 dark:text-white">
                    {fullName}
                </h3>
                <p className="small-text text-slate-500 dark:text-slate-400 truncate max-w-37.5">
                    {user?.email || 'guest@example.com'}
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;