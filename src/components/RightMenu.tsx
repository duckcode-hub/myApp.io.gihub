import React from 'react'
import Birthdays from './Birthdays'
import Ad from './Ad'
import FriendRequests from './FriendRequests'
import UserinfoCard from './UserinfoCard'
import UserMediaCard from './UserMediaCard'
import Advida from './Advida'

const RightMenu = ({userId} :{userId?: string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserinfoCard  userId={userId}/>
          <UserMediaCard userId={userId} />
        </>
      ) : null}
     <FriendRequests/>
     <Advida size="md"/>
     <Birthdays/>
     <Ad size="md"/>
     
     
     

    </div>
  )
}

export default RightMenu
