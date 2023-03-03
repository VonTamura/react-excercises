import React from 'react'
import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard' 

export function App () {
  return(
    <div className='App'>
    <TwitterFollowCard isFollowing userName='vontamura' name='Irving Alamo' />
    <TwitterFollowCard isFollowing userName='Lecpkim17' name='Kim Bonilla' />
    <TwitterFollowCard isFollowing={false} userName='arnoldocolin' name='Arnoldo Rodrigez' />
    </div>
  )
}
