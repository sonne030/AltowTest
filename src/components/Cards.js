import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return(
    <div className='cards'>
      <h1>Best picks for your career</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/google_job.jpg'
            text='Work on exciting projects at the most dominant force of the web.'
            label='Adventure'
            path='/services'
          />
          <CardItem
            src='images/tesla_job.jpg'
            text='Be an engineer of the future of transport @Tesla'
            label='Luxury'
            path='/services'
          />
          </ul>
              <ul className='cards__items'>
                <CardItem
                  src='images/img-3.jpg'
                  text='Set Sail in the  Ocean visiting Uncharted Waters'
                  label='Mystery'
                  path='/services'
                />
                <CardItem
                  src='images/img-4.jpg'
                  text='Experience Football on Top of the Himilayan Mountains'
                  label='Adventure'
                  path='/products'
                />
                <CardItem
                  src='images/img-8.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Adrenaline'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default Cards;
