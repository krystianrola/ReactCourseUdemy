import classes from "./MeetupItem.module.css";
import Card from "../../ui/Card/Card";
import {IMeetup} from "../../../utils/types";
import {useRouter} from "next/router";

interface MeetupItemProps{
    meetup: IMeetup
}

export default function MeetupItem({meetup} :MeetupItemProps) {

    const router = useRouter();

    function showDetailHandler () {
        router.push("/meetup/"+meetup.id);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={classes.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    )
}