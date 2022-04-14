export const TweetRow = ({tweet}) => (
    <tr>
        <td><span>{tweet.text}</span></td>
        <td>{tweet.retweets}</td>
    </tr>
);
