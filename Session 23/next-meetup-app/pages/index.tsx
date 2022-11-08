import type {GetStaticProps, NextPage} from 'next'
import MeetupList from "../components/meetups/MeetupList/MeetupList";
import {IMeetup} from "../utils/types";
import React, {Fragment} from "react";
// allows the acces to the head tag on a page
import Head from "next/head";

const DUMMY_LIST :IMeetup[] = [
  {
    id: "1",
    image: "https://www.insauga.com/wp-content/uploads/2021/08/cover_26-2.jpg",
    title: "Meet up Location One",
    address: "guess address 1, some city",
    description: ""
  },
  {
    id: "2",
    image: "https://cdn.foodandwineespanol.com/2018/12/torontoslid.jpg",
    title: "Meet up Location Two",
    address: "guess address 2, some city",
    description: ""
  },
  {
    id: "3",
    image: "https://media.timeout.com/images/105239112/image.jpg",
    title: "Meet up Location Three",
    address: "guess address 3, some city",
    description: ""
  }
];

export const getStaticProps: GetStaticProps = async() => {
  // you can fetch data from api
  return {
    props: {
      meetups: DUMMY_LIST
    }
  }
}

interface HomeProps{
  meetups : IMeetup[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Fragment>
      <Head>
         <title>Home</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export default Home
