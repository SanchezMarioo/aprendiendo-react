import React, { useState } from 'react';
import './App.css';

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const isFollowingClass = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';
    return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img src={`https://unavatar.io/${userName}`} alt={userName} className="tw-followCard-avatar" />
      </header>
      <div className="tw-followCard-info">
        <strong>{children}</strong>
        <span className="tw-followCard-infoUserName">@{userName}</span>
      </div>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          {isFollowingClass}
        </button>
      </aside>
    </article>
  );
}