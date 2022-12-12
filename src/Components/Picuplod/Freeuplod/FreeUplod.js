import React from 'react'
import catagory from '../Uplodcat'
import {BsLightbulb} from 'react-icons/bs'
import Select from '../Select'
const FreeUplod = () => {
  return (
    <div className='container ulode'>
        <h4 class="ulz--title">General</h4>
        <form action="/free_uplod_post" method="post">
        <div className='cool-ta-ine'>
            <div className='from-item'>
                <div className='from-item-tem'>
                    <div className='icon-tas'><BsLightbulb/></div>
                    <div className='p'>"You can easily customize all the fields and sections in the submission process. Each listing type can use different fields or custom fields"</div>
                </div>
            </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Tittal</label>
          </div>
          <input type="text" name="Tital" />
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Tagline</label>
          </div>
          <input type="text" name="Tagline" />
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Description</label>
          </div>
          <textarea name="Description" id=""></textarea>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Collection</label>
          </div>

          <div className="radio-but">
            <div className="radio-cat-name">
                {catagory[0].map((val)=>{
                  return(
                  <Select item={val} name={"Collection"}/>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Galary</label>
          </div>

          <div className="radio-but">
            <input type="file" name="Galary" id=" file-input" />
            <div className="ulz-field-info">
              <span>Maximum upload file size: 552 MB.</span>
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Download file</label>
            <p>This is the file that will be used for the bundle download</p>
          </div>

          <div className="radio-but">
            <input type="file" name="Download_file" id=" file-input" />
            <div className="ulz-field-info">
              <span>Maximum upload file size: 552 MB.</span>
            </div>
          </div>
        </div>

        </form>
      
    </div>
  )
}

export default FreeUplod
