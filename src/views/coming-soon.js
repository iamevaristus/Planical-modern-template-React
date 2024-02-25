import React from 'react'

import { Helmet } from 'react-helmet'

import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>Coming-soon - Planical modern template</title>
        <meta
          property="og:title"
          content="Coming-soon - Planical modern template"
        />
      </Helmet>
      <div className="coming-soon-container1">
        <img
          alt="image"
          src="/Logos/light-200h.png"
          className="coming-soon-image"
        />
      </div>
      <div className="coming-soon-container2">
        <div className="coming-soon-container3">
          <span className="coming-soon-text">
            Launching soon... Our website is on hold as we make some updates
            before we launch on May.
          </span>
        </div>
        <div className="coming-soon-offerings">
          <h1 className="coming-soon-text01">Our offerings</h1>
          <div className="coming-soon-services">
            <div className="coming-soon-electrician">
              <img
                alt="image"
                src="/electrician-200w.png"
                className="coming-soon-image1"
              />
              <span className="coming-soon-text02">Electrician</span>
            </div>
            <div className="coming-soon-mechanic">
              <img
                alt="image"
                src="/mechanic-200h.png"
                className="coming-soon-image2"
              />
              <span className="coming-soon-text03">Mechanic</span>
            </div>
            <div className="coming-soon-plumber">
              <img
                alt="image"
                src="/plumber-200w.png"
                className="coming-soon-image3"
              />
              <span className="coming-soon-text04">Plumber</span>
            </div>
            <div className="coming-soon-carpenter">
              <img
                alt="image"
                src="/renovation-and-decoration-of-room-200h.png"
                className="coming-soon-image4"
              />
              <span className="coming-soon-text05">Carpenter</span>
            </div>
          </div>
        </div>
        <div className="coming-soon-waitlisting">
          <main className="coming-soon-user">
            <main className="coming-soon-main">
              <h1 className="coming-soon-heading">
                As a user, access feature credits when you join our waitlist
              </h1>
              <div className="coming-soon-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="coming-soon-textinput input"
                />
                <a
                  href="mailto:evaristusadimonyemma@gmail.com?subject=Serch Waitlist - User"
                  className="coming-soon-link"
                >
                  <div className="coming-soon-buy button">
                    <span className="coming-soon-text06">-&gt;</span>
                    <span className="coming-soon-text07">Become a user</span>
                  </div>
                </a>
              </div>
            </main>
            <h1 className="coming-soon-notice">
              By submitting your email address, you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <main className="coming-soon-provider">
            <main className="coming-soon-main1">
              <h1 className="coming-soon-heading1">
                As a provider, access extended free trial period, when you join
                our waitlist
              </h1>
              <div className="coming-soon-input-field1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="coming-soon-textinput1 input"
                />
                <a
                  href="mailto:evaristusadimonyemma@gmail.com?subject=Serch Waitlist - Provider"
                  className="coming-soon-link1"
                >
                  <div className="coming-soon-buy1 button">
                    <span className="coming-soon-text08">-&gt;</span>
                    <span className="coming-soon-text09">
                      Become a provider
                    </span>
                  </div>
                </a>
              </div>
            </main>
            <h1 className="coming-soon-notice1">
              By submitting your email address, you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <main className="coming-soon-business">
            <main className="coming-soon-main2">
              <h1 className="coming-soon-heading2">
                As a business, access extended free trial period for up to 10
                providers,  when you join our waitlist
              </h1>
              <div className="coming-soon-input-field2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="coming-soon-textinput2 input"
                />
                <a
                  href="mailto:evaristusadimonyemma@gmail.com?subject=Serch Waitlist - Business"
                  className="coming-soon-link2"
                >
                  <div className="coming-soon-buy2 button">
                    <span className="coming-soon-text10">-&gt;</span>
                    <span className="coming-soon-text11">
                      Become a business
                    </span>
                  </div>
                </a>
              </div>
            </main>
            <h1 className="coming-soon-notice2">
              By submitting your email address, you agree with our Terms and
              Conditions.
            </h1>
          </main>
        </div>
        <div className="coming-soon-solutions">
          <h1 className="coming-soon-text12">Our solutions</h1>
          <div className="coming-soon-categories">
            <div className="coming-soon-users">
              <img
                alt="image"
                src="/users-200h.png"
                className="coming-soon-image5"
              />
              <span className="coming-soon-text13">Users</span>
            </div>
            <div className="coming-soon-providers">
              <img
                alt="image"
                src="/technical-support-200h.png"
                className="coming-soon-image6"
              />
              <span className="coming-soon-text14">Providers</span>
            </div>
            <div className="coming-soon-businesses">
              <img
                alt="image"
                src="/business%20(1)-200h.png"
                className="coming-soon-image7"
              />
              <span className="coming-soon-text15">Businesses</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="coming-soon-container4">
        <img
          alt="image"
          src="/Logos/tagwhite-200h.png"
          className="coming-soon-image8"
        />
        <span className="coming-soon-text16">
          © 2023 Serchservice Inc. All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default ComingSoon
