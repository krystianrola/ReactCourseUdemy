import {useRouter} from "next/router";

// domain.com/news/[newsId]
export default function NewsPage (){
    const router = useRouter();

    console.log(router.query.newsId);

    return(
        <h1>The news detials page.</h1>
    )
}