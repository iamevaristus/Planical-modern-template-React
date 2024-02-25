import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Planical modern template</title>
        <meta property="og:title" content="Home1 - Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section className="home1-section">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc1fHxyZXBhaXJ8ZW58MHx8fHwxNzA4Nzk2Njk4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home1-image"
        />
        <main className="home1-main">
          <header className="home1-header">
            <h1 className="home1-heading">Repair anything with Serch</h1>
            <span className="home1-caption">
              Pick or search for a provider, invite, and relax.
            </span>
          </header>
          <div className="home1-buttons">
            <span className="home1-link hoverButton nav-link">
              <span className="home1-text">Plumber</span>
              <br></br>
            </span>
            <span className="hoverButton nav-link">
              <span className="home1-text02">Carpenter</span>
              <br></br>
            </span>
            <span className="home1-link2 hoverButton nav-link">
              <span className="home1-text04">Mechanic</span>
              <br></br>
            </span>
            <span className="home1-link3 hoverButton nav-link">
              <span className="home1-text06">Electrician</span>
              <br></br>
            </span>
          </div>
        </main>
      </section>
      <section className="home1-section01">
        <h2 className="home1-text08">Flex your skill, earn with it</h2>
        <div className="home1-features">
          <div className="home1-feature feature feature-active">
            <h3 className="home1-text09">Mechanic</h3>
            <p className="home1-text10">
              Flex and earn with your mechanic skills
            </p>
          </div>
          <header className="feature home1-feature1">
            <h3 className="home1-text11">Plumber</h3>
            <p className="home1-text12">
              <span>Work and make money without </span>
              <span>even leaving your place.</span>
              <br></br>
            </p>
          </header>
          <header className="feature home1-feature2">
            <h3 className="home1-text16">Carpenter</h3>
            <p className="home1-text17">
              <span>Get certified based on what </span>
              <span>people say about you.</span>
              <br></br>
            </p>
          </header>
          <header className="feature home1-feature3">
            <h3 className="home1-text21">Electrician</h3>
            <p className="home1-text22">
              <span>See how skilled you are in what </span>
              <span>you do.</span>
              <br></br>
            </p>
          </header>
        </div>
        <div className="home1-note">
          <div className="home1-content">
            <main className="home1-main1">
              <h2 className="home1-heading01">
                Earn, flex and grow while you set the pace.
              </h2>
              <p className="home1-paragraph">
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
            <div className="home1-explore-more">
              <p className="home1-text34">Start providing today -&gt;</p>
            </div>
          </div>
          <div className="home1-image01">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1543747255-94b72995ac74?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtZWNoYW5pY3xlbnwwfHx8fDE3MDg3MTkwNTV8MA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home1-image02"
            />
          </div>
        </div>
      </section>
      <section className="home1-section02">
        <header className="home1-header01">
          <h2 className="home1-text35">
            Why do you need a mobile medical app?
          </h2>
          <span className="home1-text36">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </header>
        <section className="home1-note1">
          <div className="home1-image03">
            <img
              alt="image"
              src="/SectionImages/group%201428-1200w.png"
              className="home1-image04"
            />
          </div>
          <div className="home1-content1">
            <div className="home1-main2">
              <div className="home1-caption1">
                <span className="section-head">Tempor incididunt</span>
              </div>
              <div className="home1-heading02">
                <h2 className="section-heading">
                  We provide compassionate care from start to finish.
                </h2>
                <p className="section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
            <div className="home1-get-started button">
              <span className="home1-text37">Get started</span>
            </div>
          </div>
        </section>
        <section className="home1-note2">
          <div className="home1-image05">
            <img
              alt="image"
              src="/SectionImages/group%201449-1200w.png"
              className="home1-image06"
            />
          </div>
          <div className="home1-content2">
            <main className="home1-main3">
              <header className="home1-caption2">
                <span className="home1-section04 section-head">
                  Tempor incididunt
                </span>
              </header>
              <main className="home1-heading04">
                <header className="home1-header02">
                  <h2 className="section-heading">
                    Great care, wherever you are
                  </h2>
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </header>
                <div className="home1-checkmarks">
                  <Mark></Mark>
                  <Mark label="Quis nostrud exercitation ullamco"></Mark>
                  <Mark label="Reprehenderit qui in ea voluptate velit"></Mark>
                </div>
              </main>
            </main>
            <div className="home1-get-started1 button">
              <span className="home1-text38">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home1-section05">
        <header className="home1-header03">
          <header className="home1-left">
            <span className="section-head">Tempor incididunt</span>
            <h2 className="section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
          <div className="home1-right">
            <p className="home1-paragraph3 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home1-cards">
          <Card rootClassName="card-root-class-name3"></Card>
          <Card
            icon="/Icons/group%201314-200h.png"
            rootClassName="card-root-class-name4"
          ></Card>
          <Card
            icon="/Icons/group%201317-200h.png"
            rootClassName="card-root-class-name5"
          ></Card>
        </main>
      </section>
      <section className="home1-section07">
        <div className="home1-note3">
          <div className="home1-image07">
            <img
              alt="image"
              src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
              className="home1-image08"
            />
          </div>
          <div className="home1-content3">
            <div className="home1-caption3">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home1-heading07">
              <div className="home1-header04">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name1"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home1-section09">
        <div className="home1-cube">
          <div className="home1-top side"></div>
          <div className="home1-front side"></div>
          <div className="home1-left1 side"></div>
        </div>
        <main className="home1-banner">
          <div className="home1-header05">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home1-description section-description">
              Lorem ipsum dolor sit amet!
            </p>
          </div>
          <div className="home1-buttons1">
            <div className="home1-get-started2 button">
              <span className="home1-text42">Get started</span>
            </div>
            <div className="home1-book-demo button">
              <span className="home1-text43">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home1-section10">
        <div className="home1-cube1">
          <div className="home1-top1 side"></div>
          <div className="home1-front1 side"></div>
          <div className="home1-left2 side"></div>
        </div>
        <main className="home1-pricing">
          <header className="home1-header06">
            <header className="home1-left3">
              <span className="section-head">Pricing</span>
              <h2 className="section-heading home1-heading10">
                Start small, think big
              </h2>
            </header>
            <div className="home1-right1">
              <p className="home1-paragraph4 section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <div className="home1-plans-container">
            <div className="home1-switch">
              <div className="switch">
                <label className="home1-text44">Monthly</label>
              </div>
              <div className="home1-switch2 switch">
                <label className="home1-text45">Yearly</label>
              </div>
            </div>
            <main className="home1-plans">
              <div className="home1-plan">
                <div className="home1-details">
                  <div className="home1-header07">
                    <label className="home1-name">Basic</label>
                    <div className="home1-pricing1">
                      <h1 className="home1-price">$9</h1>
                      <span className="home1-duration">/mo</span>
                    </div>
                  </div>
                  <p className="home1-description1">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home1-buy-details">
                  <div className="home1-buy button">
                    <span className="home1-text46">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home1-features1">
                    <span className="home1-heading11">You will get</span>
                    <div className="home1-list">
                      <Includes rootClassName="includes-root-class-name21"></Includes>
                      <Includes rootClassName="includes-root-class-name22"></Includes>
                      <Includes rootClassName="includes-root-class-name23"></Includes>
                      <Includes rootClassName="includes-root-class-name24"></Includes>
                      <Excludes rootClassName="excludes-root-class-name18"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name19"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name20"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name21"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name22"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name23"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home1-plan1">
                <div className="home1-details1">
                  <div className="home1-header08">
                    <label className="home1-name1">Professional</label>
                    <div className="home1-pricing2">
                      <h1 className="home1-price1">$15</h1>
                      <span className="home1-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home1-description2">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home1-buy-details1">
                  <div className="home1-buy1 button">
                    <span className="home1-text49">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home1-features2">
                    <span className="home1-heading12">You will get</span>
                    <div className="home1-list1">
                      <Includes rootClassName="includes-root-class-name25"></Includes>
                      <Includes rootClassName="includes-root-class-name26"></Includes>
                      <Includes rootClassName="includes-root-class-name27"></Includes>
                      <Includes rootClassName="includes-root-class-name28"></Includes>
                      <Includes rootClassName="includes-root-class-name29"></Includes>
                      <Includes rootClassName="includes-root-class-name30"></Includes>
                      <Includes rootClassName="includes-root-class-name31"></Includes>
                      <Excludes rootClassName="excludes-root-class-name24"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name25"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name26"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home1-plan2">
                <div className="home1-details2">
                  <div className="home1-header09">
                    <label className="home1-name2">Enterprise</label>
                    <div className="home1-pricing3">
                      <span className="home1-price2">$99</span>
                      <span className="home1-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home1-description3">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home1-buy-details2">
                  <div className="home1-buy2 button">
                    <span className="home1-text52">
                      <span>Start Enterprise</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home1-features3">
                    <span className="home1-heading13">You will get</span>
                    <div className="home1-list2">
                      <Includes rootClassName="includes-root-class-name32"></Includes>
                      <Includes rootClassName="includes-root-class-name33"></Includes>
                      <Includes rootClassName="includes-root-class-name34"></Includes>
                      <Includes rootClassName="includes-root-class-name35"></Includes>
                      <Includes rootClassName="includes-root-class-name36"></Includes>
                      <Includes rootClassName="includes-root-class-name37"></Includes>
                      <Includes rootClassName="includes-root-class-name38"></Includes>
                      <Includes rootClassName="includes-root-class-name39"></Includes>
                      <Includes rootClassName="includes-root-class-name40"></Includes>
                      <Includes rootClassName="includes-root-class-name41"></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home1-help">
          <span className="home1-text55">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home1-contact-support">
            <p className="home1-text58">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home1-section12">
        <header className="home1-header10">
          <header className="home1-left4">
            <span className="section-head">Tempor incididunt</span>
            <h2 className="home1-heading14 section-heading">
              What users say about us
            </h2>
          </header>
          <div className="home1-right2">
            <p className="home1-paragraph5 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home1-cards1">
          <div className="home1-container1">
            <Review rootClassName="review-root-class-name6"></Review>
            <Review
              quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name7"
            ></Review>
          </div>
          <div className="home1-container2">
            <Review
              quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name8"
            ></Review>
            <Review
              quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name9"
            ></Review>
          </div>
          <div className="home1-container3">
            <Review
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name10"
            ></Review>
            <Review
              quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name11"
            ></Review>
          </div>
        </main>
        <div className="home1-view-more">
          <p className="home1-text59">View more</p>
        </div>
      </section>
      <section className="home1-section14">
        <header className="home1-header11">
          <span className="section-head">Articles about us</span>
          <h2 className="home1-heading15 section-heading">
            We’re the app on everyone’s lips
          </h2>
        </header>
        <main className="home1-cards2">
          <Article rootClassName="article-root-class-name6"></Article>
          <Article
            header="techeu"
            specialHeader="eu"
            rootClassName="article-root-class-name7"
          ></Article>
          <Article
            header="sifted/"
            rootClassName="article-root-class-name8"
          ></Article>
        </main>
      </section>
      <section className="home1-section16">
        <header className="home1-header12">
          <span className="section-head">FAQ</span>
          <h2 className="home1-heading16 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home1-accordion">
          <FAQ rootClassName="faq-root-class-name2"></FAQ>
        </main>
      </section>
      <section className="home1-section18">
        <main className="home1-content4">
          <header className="home1-header13">
            <h2 className="home1-heading17 section-heading">
              Stop searching online for medications and use Planical app!
            </h2>
            <div className="home1-buttons2">
              <div className="home1-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-200w.png"
                  className="home1-icon"
                />
                <span className="home1-text60">Download for iOS</span>
              </div>
              <div className="home1-android button">
                <img
                  alt="image"
                  src="/Icons/android-200h.png"
                  className="home1-icon1"
                />
                <span className="home1-text61">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/group%201505-1200w.png"
            className="home1-image09"
          />
        </main>
      </section>
      <footer className="home1-footer">
        <div className="home1-content5">
          <main className="home1-main-content">
            <div className="home1-content6">
              <header className="home1-main4">
                <div className="home1-header14">
                  <img
                    alt="image"
                    src="/Branding/planical7012-ttpb.svg"
                    className="home1-branding"
                  />
                  <span className="home1-text62">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home1-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home1-link4"
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
                    className="home1-link5"
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
                    className="home1-link6"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home1-categories">
                <div className="home1-category">
                  <div className="home1-header15">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home1-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home1-category1">
                  <div className="home1-header16">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home1-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home1-copyright">
              <span className="home1-text76">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home1-subscribe">
            <main className="home1-main5">
              <h1 className="home1-heading18">Subscribe to our newsletter</h1>
              <div className="home1-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home1-textinput input"
                />
                <div className="home1-buy3 button">
                  <span className="home1-text77">-&gt;</span>
                  <span className="home1-text78">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home1-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home1-copyright1">
            <span className="home1-text81">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home1-container5">
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

export default Home1
