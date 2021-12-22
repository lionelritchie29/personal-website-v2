import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import CallToAction from '../components/shared/CallToAction';
import Layout from '../components/shared/Layout';
import { Link } from 'gatsby';
import technologiesJson from '../../data/technologies.json';
import TechnologyCard from '../components/about/TechnologyCard';
import TinySlider from 'tiny-slider-react';

const AboutPage = ({ location }) => {
  const { technologies } = technologiesJson;

  const sliderSettings = {
    items: 3,
    mouseDrag: true,
    gutter: 10,
    controlsPosition: 'bottom',
    responsive: {
      768: {
        items: 6,
      },
      1024: {
        items: 8,
      },
    },
  };

  if (typeof window === 'undefined') return <div>Window is undefined</div>;

  return (
    <Layout location={location}>
      <section className='pt-10'>
        <h1 className='font-display text-4xl text-primary dark:text-primary-dark font-bold'>
          ~ About
        </h1>

        <div>
          <div className='bg-primary-light dark:bg-primary-dark p-1 rounded-full w-60 mx-auto mt-24'>
            <StaticImage
              src='../images/avatar.png'
              className='w-full'
              alt='Avatar'
            />
          </div>

          <div className='grid grid-cols-1 gap-6 mt-10 text-gray-700 dark:text-gray-300'>
            <p>
              Hi, my name is <b>Lionel Ritchie</b> and I am currently a computer
              science student at Binus University. I am expected to graduate in
              2023. Apart from being a student, I also <b>teach</b> various
              computer-science related courses like Algorithm, Data Structure,
              Database System, Operating System, etc.
            </p>

            <p>
              I am also responsible as a <b>Research and Development</b> to
              maintain and develop web-based system application in{' '}
              <b>Software Laboratory Center</b> at Binus University to support
              practicum operational management such as managing teaching
              schedule, teaching attendance, correction and casemaking schedule,
              etc.
            </p>

            <p>
              My main interest is in <b>web development field</b> and I aim to
              be a professional <b>full stack developer</b> in the future. I
              dedicate this simple web app to write my though and document my
              progress while learning web development, as well to showcase my
              works.
            </p>

            <div>
              <h2 className='text-primary dark:text-primary-dark text-xl font-bold font-display'>
                Contact
              </h2>

              <p>
                If you need my help in creating a website / web application for
                your portfolio or business, feel free to contact me through{' '}
                <span className='text-primary dark:text-primary-dark'>
                  my <b>email</b>{' '}
                  <a
                    href='inline-block mailto: lionelrtchieee@gmail.com'
                    className='underline'>
                    here
                  </a>{' '}
                  (lionelrtchieee@gmail.com) or my <b>Line</b>{' '}
                  <a
                    href='https://line.me/ti/p/lionelritchiee'
                    className='underline'
                    target='_blank'>
                    here
                  </a>{' '}
                  (line id: lionelritchiee).
                </span>
              </p>
            </div>
          </div>
        </div>

        <CallToAction className='my-10' icon='blog'>
          I do write blog in my free time, kindly check it out{' '}
          <Link className='underline' to='/blog'>
            here
          </Link>
        </CallToAction>

        <div>
          <h2 className='text-primary dark:text-primary-dark text-xl font-bold font-display'>
            Technologies
          </h2>

          <TinySlider settings={sliderSettings}>
            {technologies.map((tech) => (
              <TechnologyCard key={tech.name} tech={tech} />
            ))}
          </TinySlider>
        </div>

        <CallToAction className='my-10' icon='work'>
          Check some of my works and personal projects{' '}
          <Link className='inline-block underline' to='/projects'>
            here
          </Link>
        </CallToAction>
      </section>
    </Layout>
  );
};

export default AboutPage;
