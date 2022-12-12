const Filteroption = (props) => {
  
  const surc = (e) => {
    props.setquary(e.target.value);
  };
 
  const unsuch = () => {
    props.setquary("");
  };

  return (
    <div className="shado">
      <div className=" assets-container">
        <div className="assets">
          <h4>assets</h4>
          <div className="btn-group">
            <button type="button" className="btn btn-danger">
              action
            </button>
            <button
              type="button"
              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item">car</div>

              <div className="dropdown-item">food</div>

              <div className="dropdown-item">landscape</div>
              <div className="dropdown-item">dark</div>
            </div>   
          </div>
        </div>
        <div className="assets">
          <h6>search</h6>
          <input type="text" value={props.Quary} onChange={surc} />
        </div>
        <div id="button" onClick={unsuch}>
          <h5 className="btn">clear</h5>
          <button className="btn btn-danger w-100 ">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Filteroption;
