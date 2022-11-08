import MeetupItemDetails from "../../components/meetups/MeetupItemDetails/MeetupItemDetails";
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React from "react";
import {IMeetup} from "../../utils/types";

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

export const getStaticPaths: GetStaticPaths = async() => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupID: "1"
                }
            },
            {
                params: {
                    meetupID: "2"
                }
            },
            {
                params: {
                    meetupID: "3"
                }
            }
        ]
    }
}

export const getStaticProps: GetStaticProps = async(context) => {
    // to get the id from the url for example
    const meetupID = context.params!.meetupID;
    let meetupItem :IMeetup;

    meetupItem = DUMMY_LIST.find( meetup => meetup.id === meetupID) || DUMMY_LIST[0]

    return {
        props: {
            meetup: meetupItem
        }
    }
}

interface MeetupDetailPageProps {
    meetup: IMeetup
}

const MeetupDetailPage: NextPage<MeetupDetailPageProps> = (props) =>  {
    return (
        <MeetupItemDetails
            meetup={props.meetup}
        />
    )
}

export default  MeetupDetailPage;