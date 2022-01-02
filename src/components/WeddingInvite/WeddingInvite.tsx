import React, { FC } from 'react'
import AyushPic from '../../../static/1.png'
import YogitaPic from '../../../static/2.png'
import Ganesh from '../../../static/ganesh.png'
import GaneshFlip from '../../../static/ganesh-flip.png'
import Kalash from '../../../static/3.png'
import Knot from '../../../static/8.png'
import SendWishesForm from '../SendWishes/SendWishes'

const Functions: FC = () => {
  return (
    <div className="section">
      <div className="section-title">Functions -</div>
      <div className="list-item">
        <span>Mandap and Grahshanti</span>
        <span>11:00 AM, Friday, 21 Jan</span>
      </div>
      <div className="list-item">
        <span>Sangeet</span>
        <span>08:00 PM, Friday, 21 Jan</span>
      </div>
      <div className="list-item">
        <span>Varnikasi</span>
        <span>06:00 PM, Sat, 22 Jan</span>
      </div>
      <div className="list-item">
        <span>Reception</span>
        <span>08:00 PM, Sat, 22 Jan</span>
      </div>
      <div className="list-item">
        <span>Shubh Lagna, phere</span>
        <span>11:30 PM, Sat, 22 Jan</span>
      </div>
    </div>
  )
}

const GettingThere: FC = () => {
  return (
    <div className="section">
      <div className="section-title">Getting There -</div>
      <div className="venue">
        <div className="address">
          <div>Prashanti Garden,</div>
          <div>Opposite D-Mart, Indore road, Ujjain</div>
        </div>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.900461887842!2d75.78767711539487!3d23.137313317835105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396374961c06df7b%3A0x806c81d1bc628ea6!2sPrashanti%20Garden!5e0!3m2!1sen!2sin!4v1641046274725!5m2!1sen!2sin"
            width="300"
            height="256"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="prashanti-map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

const SendWishes: FC = () => {
  return (
    <div className="section">
      <div className="section-title">Send Wishes -</div>
      <SendWishesForm />
    </div>
  )
}

const WeddingInviteComponent: FC = () => {
  return (
    <div className="wedding-invite-container">
      <div className="first-page">
        <div className="ganesh">
          <img src={Ganesh} style={{ maxHeight: '160px' }} alt="Ganesh" />
          <img src={Kalash} style={{ maxHeight: '100px' }} alt="Kalash" />
          <img src={GaneshFlip} style={{ maxHeight: '160px' }} alt="Ganesh" />
        </div>
        <div className="body-container">
          <div>Together with their families</div>
          <div className="pic-container">
            <div className="pic">
              <img src={AyushPic} alt="Ayush" />
            </div>
            <div className="name-container">
              <div className="name">Ayush and Yogita</div>
              <div className="knot">
                <img src={Knot} alt="Knot" style={{ maxHeight: '120px' }} />
              </div>
            </div>
            <div className="pic">
              <img src={YogitaPic} alt="Yogita" />
            </div>
          </div>
          <div>Joyfully invite you to their wedding celebrations on</div>
          <div className="date">
            <div>22 January 2022</div>
            <div>Ujjain</div>
          </div>
        </div>
      </div>

      <div className="sections-container">
        <Functions />
        <GettingThere />
        <SendWishes />
      </div>
    </div>
  )
}

export default WeddingInviteComponent
