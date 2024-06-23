import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";


const SideBar = () => {
  return (
    <>
   
      <div className={`${styles.SideTop}`}>
        <ul className={`${styles.SideUl}`}>
          <li className={`${styles.SideLi} ${styles.active}`}>
            <span className={`material-icons ${styles.iconHome}`}>
            home_filled
            </span>
            <div>
              <NavLink
                to="/"
                className={`${styles.NavLink}`}
                activeClassName={styles.activeLink}
              >
                Anasayfa
              </NavLink>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div >
              <NavLink
                to="/shorts"
                className={`${styles.link} ${styles.NavLink}`}
                activeClassName={styles.activeLink}
              >
                Shorts
              </NavLink>
            </div>

          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div>
              <NavLink
                to="/abonelikler"
                className={`${styles.link} ${styles.NavLink}`}
                activeClassName={styles.activeLink}
              >
                Abonelikler
              </NavLink>
            </div>

          </li>

        </ul>
      </div>
      <div className={`${styles.SideTop}`}>
        <div className={`${styles.SideTitle}`}>
        <h4>Siz </h4> 
        <span className={`material-symbols-outlined ${styles.iconSpecial}`}>
arrow_forward_ios
</span>
        </div>
       
        <ul className={`${styles.SideUl}`}>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            switch_account
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Kanalınız</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            history
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Geçmiş</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            playlist_play
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Oynatma Listeleri</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            slideshow
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Videolarınız</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            schedule
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Daha Sonra İzle</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            thumb_up
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Beğendiğim Videolar</a>
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.SideTop}`}>
      <div className={`${styles.SideTitle}`}>
        <h4>Abonelikler </h4> 
        </div>
        <ul className={`${styles.SideUl}`}>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Geleceği Yazanlar</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Geçmiş</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Turkcell Akademi</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Varol Maksutoğlu</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Barış Benli</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            circle
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Devamı</a>
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.SideTop}`}>
      <div className={`${styles.SideTitle}`}>
        <h4>Keşfet </h4> 
        </div>
        <ul className={`${styles.SideUl}`}>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            local_fire_department
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Trendler</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            music_note
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Müzik</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            sensors
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Canlı Yayın</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            sports_esports
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Oyun</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
            emoji_events
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Spor</a>
            </div>
          </li>
        </ul>
      </div>
      <div className={`${styles.SideTop}`}>
      <div className={`${styles.SideTitle}`}>
        <h4>Youtube'dan Daha Fazlası </h4> 
        </div>        
        <ul className={`${styles.SideUl}`}>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Youtube Premium</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Youtube Studio</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Youtube Music</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Oyun</a>
            </div>
          </li>
          <li className={`${styles.SideLi}`}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              subscriptions
            </span>
            <div className={`${styles.SideSubTitle}`}>
              <a href="">Youtube Kids</a>
            </div>
          </li>
        </ul>
      </div>
    
    </>

  );
}

export default SideBar;
