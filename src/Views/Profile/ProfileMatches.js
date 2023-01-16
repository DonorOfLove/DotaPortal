import React, {useEffect, useState} from 'react';
import s from "./profile.module.css"
import Match from "../../Components/Match";
import InfiniteScroll from "react-infinite-scroller";

const ProfileMatches = ({matches}) => {
    const itemsPerPage = 20;

    const [hasMore, setHasMore] = useState(false);
    const [records, setRecords] = useState(itemsPerPage);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 5 && records < matches.length) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }
    const loadMore = () => {
        if (records === matches.length) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setRecords(records + itemsPerPage);
            }, 500);
        }
    };
    const showItems = (matches) => {
        let items = [];
        for (let i = 0; i < records; i++) {
            if (i < matches.length-1) {
                items.push(
                    <Match match={matches[i]}/>
                )
            } else {
                break;
            }
        }
        return items;
    };

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<h4 className="loader">Loading...</h4>}
            useWindow={false}
        >

            <table className={s.recent_matches}>
                <thead className={s.head}>
                <th>Hero:</th>
                <th>Queue:</th>
                <th>Duration:</th>
                <th>K/D/A</th>
                <th>Team:</th>
                <th>Played:</th>
                </thead>
                <tbody>
                {showItems(matches)}
                </tbody>
            </table>
        </InfiniteScroll>


    )
}

export default React.memo(ProfileMatches);
