import classes from "./MeetupItemDetails.module.css";
import {IMeetup} from "../../../utils/types";

interface MeetupItemDetailProps{
    meetup: IMeetup
}

export default function MeetupItemDetails({meetup}:MeetupItemDetailProps){
    return(
        <section className={classes.details}>
            <img src={meetup.image} alt="meet up place"/>
            <h1>{meetup.title}</h1>
            <address>{meetup.address}</address>
            {meetup.description && <p>{meetup.description}</p>}
        </section>
    )    
}