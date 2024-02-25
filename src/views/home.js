import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc1fHxyZXBhaXJ8ZW58MHx8fHwxNzA4Nzk2Njk4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-image"
        />
        <main className="home-main">
          <header className="home-header">
            <h1 className="home-heading">Repair anything with Serch</h1>
            <span className="home-caption">
              Pick or search for a provider, invite, and relax.
            </span>
          </header>
          <div className="home-buttons">
            <span className="home-link hoverButton">
              <span className="home-text">Plumber</span>
              <br></br>
            </span>
            <span className="home-link1 hoverButton">
              <span className="home-text02">Mechanic</span>
              <br></br>
            </span>
            <span className="home-link2 hoverButton">
              <span>Electrician</span>
              <br></br>
            </span>
            <span className="home-link3 hoverButton">
              <span className="home-text06">Carpenter</span>
              <br></br>
            </span>
          </div>
        </main>
      </section>
      <section className="home-section1">
        <h2 className="home-text08">Flex your skill, earn with it</h2>
        <div className="home-features">
          <div className="home-feature feature feature-active">
            <h3 className="home-text09">Mechanic</h3>
            <p className="home-text10">
              Flex and earn with your mechanic skills
            </p>
          </div>
          <header className="feature home-feature1">
            <h3 className="home-text11">Plumber</h3>
            <p className="home-text12">
              <span>Work and make money without </span>
              <span>even leaving your place.</span>
              <br></br>
            </p>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text16">Carpenter</h3>
            <p className="home-text17">
              <span>Get certified based on what </span>
              <span>people say about you.</span>
              <br></br>
            </p>
          </header>
          <header className="feature home-feature3">
            <h3 className="home-text21">Electrician</h3>
            <p className="home-text22">
              <span>See how skilled you are in what </span>
              <span>you do.</span>
              <br></br>
            </p>
          </header>
        </div>
        <div className="home-note">
          <div className="home-content">
            <main className="home-main1">
              <h2 className="home-heading1">
                Earn, flex and grow while you set the pace.
              </h2>
              <p className="home-paragraph">
                <span>
                  Use your skill and make the money that you want. You set the
                  price, while users enjoy your amazing skillset.
                </span>
                <br></br>
                <br></br>
                <span>
                  Get certified based on what people say about you, update your
                  resume with your account information.
                </span>
                <br></br>
                <br></br>
                <span>
                  See what people say about your skillset. Remember that it goes
                  beyond what you can do, but also how you do it.
                </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text34">Start providing today -&gt;</p>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1543747255-94b72995ac74?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtZWNoYW5pY3xlbnwwfHx8fDE3MDg3MTkwNTV8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-image2"
            />
          </div>
        </div>
      </section>
      <section className="home-section2">
        <main className="home-main2">
          <header className="home-header1">
            <h1 className="home-heading2">Serch, modified for business</h1>
            <span className="home-caption1">
              Serch is not just a platform connecting users to providers, but
              also modified for companies of any size.
            </span>
          </header>
          <div className="home-buttons1">
            <span className="home-link4 hoverButton">
              <span className="home-text35">Get started</span>
              <br></br>
            </span>
            <div className="home-explore-more1">
              <p className="home-text37">See our solutions -&gt;</p>
            </div>
          </div>
        </main>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM5fHxidXNpbmVzc3xlbnwwfHx8fDE3MDg4MDE4Nzd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-image3"
        />
      </section>
      <section className="home-section3">
        <main className="home-content1">
          <header className="home-header2">
            <h2 className="home-heading3 section-heading">
              Your one-stop search for service providers
            </h2>
            <div className="home-buttons2">
              <div className="home-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-200w.png"
                  className="home-icon"
                />
                <span className="home-text38">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/Icons/android-200h.png"
                  className="home-icon1"
                />
                <span className="home-text39">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/group%201505-1200w.png"
            className="home-image4"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content2">
          <main className="home-main-content">
            <div className="home-container1">
              <div className="home-header3">
                <img
                  alt="image"
                  src="/Logos/light-200h.png"
                  className="home-branding"
                />
                <img
                  alt="image"
                  src="/Logos/tagwhite-200h.png"
                  className="home-image5"
                />
                <span className="link-hover-white footer-header">
                  <span className="home-text41">Visit Help Center</span>
                  <br></br>
                </span>
              </div>
              <main className="home-subscribe">
                <main className="home-main3">
                  <h1 className="home-heading4">Subscribe to our newsletter</h1>
                  <div className="home-input-field">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="home-textinput input"
                    />
                    <div className="home-buy button">
                      <span className="home-text43">-&gt;</span>
                      <span className="home-text44">
                        <span>Subscribe now</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </main>
                <h1 className="home-notice">
                  By subscribing to our newsletter you agree with our Terms and
                  Conditions.
                </h1>
              </main>
            </div>
            <header className="home-categories">
              <div className="home-category">
                <div className="home-header4">
                  <span className="footer-header">Company</span>
                </div>
                <div className="home-links">
                  <span className="footer-link">About Us</span>
                  <span className="footer-link">Blog</span>
                  <span className="footer-link">Newsroom</span>
                  <span className="footer-link">Marketplace</span>
                  <span className="footer-link">Careers</span>
                </div>
              </div>
              <div className="home-category1">
                <div className="home-header5">
                  <span className="footer-header">Product</span>
                </div>
                <div className="home-links1">
                  <span className="footer-link">Request</span>
                  <span className="footer-link">Provide</span>
                  <span className="footer-link">Business</span>
                </div>
              </div>
              <div className="home-category2">
                <div className="home-header6">
                  <span className="footer-header">Information</span>
                </div>
                <div className="home-links2">
                  <span className="footer-link">Safety Guidelines</span>
                  <span className="footer-link">Countries in Serch</span>
                  <span className="footer-link">Pricing</span>
                </div>
              </div>
              <div className="home-category3">
                <div className="home-header7">
                  <span className="footer-header">Support</span>
                </div>
                <div className="home-links3">
                  <span className="footer-link">Legal Hub</span>
                  <span className="footer-link">Support Hub</span>
                  <span className="footer-link">Improve our services</span>
                  <span className="footer-link">Report broken features</span>
                </div>
              </div>
            </header>
            <div className="home-socials">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <img
                  alt="image"
                  src="/Icons/linkedin-200h.png"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <img
                  alt="image"
                  src="/Icons/instagram-200h.png"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <img
                  alt="image"
                  src="/Icons/twitter-200h.png"
                  className="social"
                />
              </a>
            </div>
            <section className="home-copyright">
              <span className="home-text66">
                © 2023 Serchservice Inc. All Rights Reserved.
              </span>
            </section>
          </main>
          <section className="home-copyright1">
            <span className="home-text67">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
