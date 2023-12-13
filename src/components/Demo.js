import React from 'react'
import "../css/demo.css"
import {faMagnifyingGlass,faRing,faPhotoFilm, faCakeCandles} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Demo() {
  return (
    <div>
      <section className="well well__ins1 center">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <FontAwesomeIcon className="flaticon-toilets1" icon={faCakeCandles} size='2xl' color='black' />

        <hr />
        <h3>WE ARE CREATIVE</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
      <div className="col-md-4">
        <div className="flaticon-coffee69" />
        <hr />
        <h3>WE ARE MODERN</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
      <div className="col-md-4">
        <div className="flaticon-hotel70" />
        <hr />
        <h3>WE ARE EXPERTS</h3>
        <p>Lorem ipsum dolor sit amet conse ctetur <br /> adipisicing elit, sed do eiusmod tempor incididunt ut
          labore
          et </p>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
