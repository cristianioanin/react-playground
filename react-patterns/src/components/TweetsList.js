import {TweetCategory} from "./TweetCategory";
import {TweetRow} from "./TweetRow";

export const TweetsList = ({
    tweets,
    filterText,
    inThisLocation
}) => {
    const rows = [];
    let lastCategory = null;

    tweets.forEach(tweet => {
        if (!tweet.text.toLowerCase().includes(filterText.toLowerCase())) {
            return;
        }

        if (inThisLocation && !tweet.isLocal) {
            return;
        }

        if (tweet.category !== lastCategory) {
            rows.push(
                <TweetCategory
                    category={tweet.category}
                    key={tweet.category}
                />
            )
        }

        rows.push(
            <TweetRow
                tweet={tweet}
                key={tweet.text}
            />
        );

        lastCategory = tweet.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Tweet Text</th>
                <th>Retweets</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
};
