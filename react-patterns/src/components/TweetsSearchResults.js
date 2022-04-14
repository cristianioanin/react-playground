import {useState} from "react";
import {SearchBar} from "./SearchBar";
import {TweetsList} from "./TweetsList";

export const TweetsSearchResults = ({
    tweets
}) => {
    const [filterText, setFilterText] = useState('');
    const [inThisLocation, setInThisLocation] = useState('');

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inThisLocation={inThisLocation}
                setFilterTextFn={setFilterText}
                setInThisLocationFn={setInThisLocation}
            />
            <TweetsList
                tweets={tweets}
                filterText={filterText}
                inThisLocation={inThisLocation}
            />
        </div>
    )
}
