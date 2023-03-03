import { useState } from "react"; 

export function TwitterFollowCard ( { userName, name } ) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? 'Siguiendo' : 'seguir';
  const buttonClassName = isFollowing 
    ? 'ia-followCard-button is-following'
    : 'ia-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return(
    <article className='ia-followCard'>
      <header className='ia-followCard-card'>
        <img 
          src={`https://unavatar.io/${userName}`} 
          className='ia-followCard-avatar' 
          alt='Avatar' 
        />
        <div className='ia-followCard-info'>
          <strong className='ia-followCard-infoUserName'>
            {name} 
          </strong>
          <span>
            @{ userName } 
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}
