import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";
import {IMeetup} from "../../utils/types";


export default function NewMeetupPage(){

    const onAddMeetupHandler = (meetup : IMeetup) => {
        console.log(meetup)
    }

    return (
        <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    )
}