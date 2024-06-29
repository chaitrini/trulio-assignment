import React from 'react';

const SearchComponent = () => {
  return (
    <div className="pos_relative">
      <input
        className="input-field"
        type="text"
        placeholder="Search for City, Neighborhood, Zip, County, School"
        name="location-search"
        aria-label="Search for City, Neighborhood, Zip, County, School"
        id="banner-search"
        value="Hyderabad, Telangana, India"
      />
 
      <div className="search-button">
        <div className="inline-block w-8 h-8 fill-white button-icon">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            aria-hidden="true"
          >
            <path
              d="m20.756 18.876 6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
