import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {BsFillCollectionFill} from 'react-icons/bs'
const Undnav = () => {
  return (
    <div>
      <BottomNavigation>
        <BottomNavigationAction label='Home'/>
        <BottomNavigationAction label='Explor'/>
        <BottomNavigationAction label='Colection'/>
        <BottomNavigationAction/>

      </BottomNavigation>
    </div>
  )
} 

export default Undnav


