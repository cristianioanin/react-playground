export const SearchBar = ({
   filterText,
   inThisLocation,
   setFilterTextFn,
   setInThisLocationFn
}) => (
    <form>
        <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterTextFn(e.target.value)}
        />
        <p>
            <label htmlFor="current-location">
                <input
                    type="checkbox"
                    checked={inThisLocation}
                    id="current-location"
                    onChange={(e) => setInThisLocationFn(e.target.checked)}
                />
                {' '}
                Only show tweets in your current location
            </label>
        </p>
    </form>
);

