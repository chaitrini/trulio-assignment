import './Help.css'; 
function Help() {
  return (
    <div className="grid-container">
      {/* First column */}
      <div className="grid-cell">
        <div className="box-container">
          <div className="box">
            <div className="image-container">
              <img src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg" alt="" className="image" />
            </div>
            <h3 className="title">Buy a home</h3>
            <p className="description">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            <div className="button-container">
              <a href="/houses-for-sale-near-me/" className="button">Find a home</a>
            </div>
          </div>
        </div>
      </div>

      {/* Second column */}
      <div className="grid-cell">
        <div className="box-container">
          <div className="box">
            <div className="image-container">
              <img src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg" alt="" className="image" />
            </div>
            <h3 className="title">Rent a home</h3>
            <p className="description">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            <div className="button-container">
              <a href="/apartments-for-rent-near-me/" className="button">Find a rental</a>
            </div>
          </div>
        </div>
      </div>

      {/* Third column */}
      <div className="grid-cell">
        <div className="box-container">
          <div className="box">
            <div className="image-container">
              <img src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg" alt="" className="image" />
            </div>
            <h3 className="title">See others</h3>
            <p className="description">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
            <div className="button-container">
              <a href="/neighborhoods/" className="button">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
