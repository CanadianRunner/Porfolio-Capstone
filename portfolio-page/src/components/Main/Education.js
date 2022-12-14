import React from 'react'
import PropTypes from 'prop-types'
import "../../scss/education.scss";
import { Card } from '@mui/material';

function Education(props) {
  return (
    <div className='about__me'>
    <Card variant="outlined" className='about__card' sx={{background: '#E7F6F2'}}> 
      <div className='about__content'>
        <h2 className='about__title'>About me</h2>
        <div className='about__body'>
          <p>Thanks for stopping by!  My name's Sean Keane. I live and try and keep dry in Portland, Oregon. I'm a dual Irish/Canadian citizen who you'll find happiest with a cup of Barry's tea and a bowl of poutine. I am a web developer who is excited to begin my engineering journey!</p> 
          <p>I'm a fast learner and would positively impact your team.  If you have an opportunity you think I'd be a good fit for, I'd love it if you reached out!</p>
        </div>
      </div>
    </Card>
  </div>
  )
}

Education.propTypes = {}

export default Education
