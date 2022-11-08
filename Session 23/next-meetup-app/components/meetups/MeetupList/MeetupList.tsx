import classes from "./MeetupList.module.css";
import MeetupItem from "../MeetupItem/MeetupItem";
import {IMeetup} from "../../../utils/types";

interface MeetupListProps{
    meetups: IMeetup[]
}

export default function MeetupList({meetups}:MeetupListProps){
    return (
        <ul className={classes.list}>
            {meetups.map((meetup :IMeetup) => (
                <MeetupItem
                    key={meetup.id}
                    meetup={meetup}
                />
            ))}
        </ul>
    );
}