import React from "react";
import "./ShowImges.css";
import { Link } from "react-router-dom";
import carddata from "./Cardapi";
const ShowImages = () => {
  return (
    <div className="goodImges">
      <div className="gdImginside">
        <div className="img-row">
          {carddata.map((valu, ind) => {
            return (
              <div className="row-img">
                <div className="row-masonry-cell-inne">
                  <div className="row-indide">
                    <div className="item-img">
                      <Link to={`/products/${valu.cat}`}>
                        <img src={valu.Img} alt="" />
                        <div className="info-line">
                          <div className="counts hide-xs hide-sm ">
                            <em
                              className="ua-engagement-like show-entry-point-modal"
                              data-w="442"
                              data-href="/accounts/register/?source=&amp;next=/images/id-7342177/&amp;modal"
                            >
                              <i className="icon icon_like"></i> 55
                            </em>
                            <em
                              className="show-entry-point-modal"
                              data-w="442"
                              data-href="/accounts/register/?next=/images/id-7342177/&amp;source=comment_image&amp;modal"
                            >
                              <i className="icon icon_comment"></i> 14
                            </em>
                            <em
                              title="Add to collection"
                              className="ua-engagement-collect show-entry-point-modal"
                              data-w="442"
                              data-href="/accounts/register/?next=/images/id-7342177/&amp;source=collect_photo&amp;modal"
                            >
                              <i
                                id="collect_photo_7342177"
                                className="icon icon_bookmark"
                              ></i>
                            </em>
                          </div>
                          <span itemprop="caption">
                            <a href="/images/search/wind%20energy/">
                              wind energy
                            </a>{" "}
                            <a href="/images/search/wind%20farm/">wind farm</a>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowImages;
