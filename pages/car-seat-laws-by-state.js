import Container from '../components/Container';
import Layout from '../components/Layout';
import markdownStyles from '../components/markdown-styles.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import Seo from '../components/Seo';
import allStates from "../lib/allstate.json";

const DynamicMap = dynamic(() => import('../components/UsMap'), {
    suspense: true,
  })
  

export default function carSeatLawsByState() {

    

    return (
        <Layout>
            <Seo 
                title="Usa Car Seat Laws By State | SweetBabyTime"
                image = "https://www.sweetbabytime.com/images/Car-seat-laws.jpg"
                url = "https://www.sweetbabytime.com/car-seat-laws-by-state"
                description=  "list of state car seat laws, Updated annually so you can know your local car seat laws by state to maximize car safety for your kids."
            />
            <Container>
                <div className={`p-5 md:p-10  bg-white shadow-lg rounded-lg mx-auto ${markdownStyles.markdown} mr-0 md:mr-40`}>
                    <h1 className="text-2xl lg:text-3xl font-medium capitalize text-center">All You Need To know about your state car seat laws.</h1>
                    <p>
                        There can be a lot of confusion when it comes to car seat laws by state. <br/> It is important to know the laws of the state that you are driving in, as well as the states that you will be travelling through. <br/> Each state has its own set of laws regarding car seats and Booster seats. Some states require that all children under the age of four must be in a car seat, while other states only require car seats for children under the age of two
                    </p>
                    <p>
                        Here at sweetbabytime We’ve created a complete list of car seat laws for each of the 50 states of the U.S. 
                        We review each state’s laws annually and update them as changes are made.
                    </p>

                    <div className='mt-20'>
                        <h2 className='!text-black !font-light uppercase text-center !max-w-full'> FIND YOUR CAR SEAT LAWS BY STATE </h2>
                        <p className='text-center text-sm'>Click on your state on the map below to see your state’s car seat law.</p>
                    </div>

                    <div>
                        <Suspense fallback={<Spinner />}>
                            <DynamicMap />
                        </Suspense>
                    </div>

                    <h2 className='!font-light capitalize'> CAR SEAT LAWS BY STATE </h2>

                    <ul className=''>
                        { allStates.map(state => {
                            if(state.url !== "") {
                                return (
                                    <li className='!mb-0' key={state.id}>
                                        <Link href="/blog/post/[slug]"  as={`/blog/post/${state.url}`}>
                                            <a>
                                                {state.id} - {state.name}   
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }else {
                                return null;
                            }
                        } ) }
                    </ul>

                    <h2 className='!text-black !font-light !uppercase text-center !max-w-full'> Safety Tips for Child Passengers </h2>
                    <ul className='mr-0 md:mr-40'>
                        <li className='!mb-0'>
                            <p>Always use a car seat or booster seat for children who are under the age of 12 or who are too small to use a seat belt safely.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Make sure the car seat is appropriate for the child&apos;s age, weight, and height, and is installed correctly according to the manufacturer&apos;s instructions.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Place the car seat in the back seat of the vehicle and secure it using the vehicle&apos;s seat belt system.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Use the top tether and lower anchors (if available) to secure the car seat to the vehicle.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Make sure the child is properly buckled in the car seat, with the harness snug and the seat belt properly adjusted.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Avoid using aftermarket products, such as car seat covers or cushions, that are not approved by the car seat manufacturer.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Never leave a child alone in a vehicle, even for a short period of time.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Avoid distractions while driving, such as talking on the phone or eating, and keep your eyes on the road at all times.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Follow the speed limit and other traffic laws, and always drive defensively.</p>
                        </li>
                        <li className='!mb-0'>
                            <p>Make sure everyone in the vehicle is properly buckled up, including the driver and all passengers.</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </Layout>
    )
}