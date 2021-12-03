import * as React from 'react';
import Header from '../components/home/Header';
import CallToAction from '../components/shared/CallToAction';
import Layout from '../components/shared/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <CallToAction
        className='my-10'
        icon='blog'
        text='I do write blog in my free time, kindly check it out here'
      />

      <section>
        <h2 className='font-display font-bold text-2xl dark:text-white'>
          Latest Article
        </h2>

        <div className='w-full h-60 bg-primary-lighter mt-2 dark:bg-gray-700 dark:text-gray-200 p-5 flex justify-center items-center rounded-md'>
          Coming Soon
        </div>
      </section>

      <CallToAction
        className='my-10'
        icon='work'
        text='Check some of my works and personal projects here'
      />

      <section className='mt-4 pb-12'>
        <h2 className='font-display font-bold text-2xl text-primary dark:text-white'>
          Latest Projects
        </h2>

        <div className='w-full h-60 bg-primary-lighter text-primary mt-2 dark:bg-gray-700 dark:text-gray-200 p-5 flex justify-center items-center rounded-md'>
          Coming Soon
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
