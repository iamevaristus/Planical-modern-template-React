import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-content">
        <main className="footer-main-content">
          <div className="footer-content1">
            <header className="footer-main">
              <div className="footer-header">
                <img
                  alt={props.brandingAlt}
                  src={props.brandingSrc}
                  className="footer-branding"
                />
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="footer-image"
                />
              </div>
              <div className="footer-socials">
                <a
                  href={props.linkLinkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link"
                >
                  <img
                    alt={props.linkedInAlt}
                    src={props.linkedInSrc}
                    className="social"
                  />
                </a>
                <a
                  href={props.linkInstagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  <img
                    alt={props.instagramAlt}
                    src={props.instagramSrc}
                    className="social"
                  />
                </a>
                <a
                  href={props.linkTwitter}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <img
                    alt={props.twitterAlt}
                    src={props.twitterSrc}
                    className="social"
                  />
                </a>
              </div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header1">
                  <span className="footer-header">{props.text4}</span>
                </div>
                <div className="footer-links">
                  <span className="footer-link">{props.text5}</span>
                  <span className="footer-link">{props.text6}</span>
                  <span className="footer-link">{props.text7}</span>
                  <span className="footer-link">{props.text8}</span>
                  <span className="footer-link">{props.text9}</span>
                </div>
              </div>
              <div className="footer-category1">
                <div className="footer-header2">
                  <span className="footer-header">{props.text10}</span>
                </div>
                <div className="footer-links1">
                  <span className="footer-link">{props.text11}</span>
                  <span className="footer-link">{props.text12}</span>
                  <span className="footer-link">{props.text13}</span>
                  <span className="footer-link">{props.text14}</span>
                  <span className="footer-link">{props.text15}</span>
                  <span className="footer-link">{props.text16}</span>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright">
            <span className="footer-text13">{props.text1}</span>
          </section>
        </main>
        <main className="footer-subscribe">
          <main className="footer-main1">
            <h1 className="footer-heading">{props.heading}</h1>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder={props.textinputPlaceholder}
                className="footer-textinput input"
              />
              <div className="footer-buy button">
                <span className="footer-text14">{props.text3}</span>
                <span className="footer-text15">
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </div>
          </main>
          <h1 className="footer-notice">{props.notice}</h1>
        </main>
        <section className="footer-copyright1">
          <span className="footer-text18">{props.text}</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text11: 'About',
  linkedInAlt: 'image',
  text3: '->',
  text10: 'Company',
  linkTwitter: 'https://example.com',
  text12: 'Team',
  twitterAlt: 'image',
  linkInstagram: 'https://example.com',
  imageSrc: '/Logos/tagwhite-200h.png',
  brandingSrc: '/Logos/light-200h.png',
  text7: 'Design to Code',
  text5: 'Responsive Web Design',
  heading: 'Subscribe to our newsletter',
  text15: 'Careers',
  text6: 'Responsive Prototypes',
  instagramAlt: 'image',
  text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  text4: 'Solutions',
  text9: 'Static Website Generator',
  text: '© 2022 latitude. All Rights Reserved.',
  brandingAlt: 'image',
  text1: '© 2022 latitude. All Rights Reserved.',
  text16: 'Press & Media',
  linkLinkedIn: 'https://example.com',
  text14: 'Partners',
  twitterSrc: '/Icons/twitter-200h.png',
  imageAlt: 'image',
  linkedInSrc: '/Icons/linkedin-200h.png',
  instagramSrc: '/Icons/instagram-200h.png',
  notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  text8: 'Static Website Builder',
  textinputPlaceholder: 'Enter your email',
  text13: 'News',
}

Footer.propTypes = {
  text11: PropTypes.string,
  linkedInAlt: PropTypes.string,
  text3: PropTypes.string,
  text10: PropTypes.string,
  linkTwitter: PropTypes.string,
  text12: PropTypes.string,
  twitterAlt: PropTypes.string,
  linkInstagram: PropTypes.string,
  imageSrc: PropTypes.string,
  brandingSrc: PropTypes.string,
  text7: PropTypes.string,
  text5: PropTypes.string,
  heading: PropTypes.string,
  text15: PropTypes.string,
  text6: PropTypes.string,
  instagramAlt: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text9: PropTypes.string,
  text: PropTypes.string,
  brandingAlt: PropTypes.string,
  text1: PropTypes.string,
  text16: PropTypes.string,
  linkLinkedIn: PropTypes.string,
  text14: PropTypes.string,
  twitterSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  linkedInSrc: PropTypes.string,
  instagramSrc: PropTypes.string,
  notice: PropTypes.string,
  text8: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text13: PropTypes.string,
}

export default Footer
