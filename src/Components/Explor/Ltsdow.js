import React, { useEffect, useState } from "react";

import Ltsdoncard from "./Ltsdoncard";
import InfiniteScroll from "react-infinite-scroll-component";
import Axios from "axios";
import Loding from "./Loding";

const Ltsdow = () => {
  const [apiimg, setApiImg] = useState([]);
  useEffect(() => {
    fatchImg();
  }, []);

  const fatchImg = () => {
    const apiroot = "https://api.unsplash.com";
    const acceskey = "Lu7b8XD73fpLZErQAsFlrMDFIGmZEwA3s1YcPiPQC68";

    Axios.get(`${apiroot}/photos/random?client_id=${acceskey}&count=10`).then(
      (res) => {
        setApiImg([...apiimg, ...res.data]);
      }
    );
  };

  return (
    <>
      <div className=" lt">
        <div className=" tl d-flex justify-content-center">
          <h1>Latest uploads</h1>
          <InfiniteScroll
              dataLength={apiimg.length}
              next={fatchImg}
              hasMore={true}
              loader={<Loding />}
            >
          <div className="photoset -square -portrait">
            
              {apiimg.map((val) => {
                return <Ltsdoncard img={val.urls.thumb} key={val.id} />;
              })}
           
          </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Ltsdow;
