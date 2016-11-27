import React from 'react';
import $ from 'jquery';
import { Parallax } from 'react-parallax';
import Card from './Card';
import CardTitle from './CardTitle';
import Icon from './Icon';
import Collapsible from 'react-collapsible';

const Products = React.createClass({
    render: function () {
      let gummy = <Collapsible className="Collapsible__trigger" trigger="HairGel" triggerWhenOpen="Gummy HairGel" data-collapsible="accordion">
                      <div className="Collapsible">
                        <div className="row Collapsible__contentInner ">
                          <div className="col s12 m12">
                            <img className="img-size" src={"http://juniorsbarbershop.com/wp-content/uploads/gummyhairgel.jpg"} />
                          </div>
                          <div className="col s12 m12">
                            <p className="center">
                              While Supplies Last! Call for Price!
                            </p>
                          </div>
                        </div>
                      </div>
                    </Collapsible>;

      let talc =  <Collapsible className="Collapsible__trigger" trigger="Talc" triggerWhenOpen="Talc - Pinaud, Clubman" data-collapsible="accordion">
                    <div className="Collapsible">
                      <div className="row Collapsible__contentInner ">
                        <div className="col s12 m12">
                          <img className="img-size" src={"http://barber.nl/wp-content/uploads/2012/12/IMG_8010.jpg"} />
                        </div>
                        <div className="col s12 m12">
                          <p className="center">
                            While Supplies Last! Call for Price!
                          </p>
                        </div>
                      </div>
                    </div>
                  </Collapsible>;

      let gorilla =     <Collapsible className="Collapsible__trigger" trigger="Gel" triggerWhenOpen="Gorilla - World's Strongest" data-collapsible="accordion">
                          <div className="Collapsible">
                            <div className="row Collapsible__contentInner ">
                              <div className="col s12 m12">
                                <img className="img-size" src={"http://target.scene7.com/is/image/Target/13974383?wid=450&hei=450&fmt=pjpeg"} />
                              </div>
                              <div className="col s12 m12">
                                <p className="center">
                                  While Supplies Last! Call for Price!
                                </p>
                              </div>
                            </div>
                          </div>
                        </Collapsible>;

      let clay =  <Collapsible className="Collapsible__trigger" trigger="Gentleman's Clay" triggerWhenOpen="Colrane Clay" data-collapsible="accordion">
                    <div className="Collapsible">
                      <div className="row Collapsible__contentInner ">
                        <div className="col s12 m12">
                          <img className="img-size" src={"http://gentlemensapproach.co.nz/wp-content/uploads/2016/05/Coltrane_Clay_1-768x768.png"} />
                        </div>
                        <div className="col s12 m12">
                          <p className="center">
                            While Supplies Last! Call for Price!
                          </p>
                        </div>
                      </div>
                    </div>
                  </Collapsible>;
  	return (
    	<div>
        <Parallax bgImage="http://www.streamlineworkspace.com/thumbs/featured/1024x768/33394/33394-9r.jpg" strength={200}>
            <br/>
            <h3 id="title" className='sitefont center'>PRODUCTS</h3>
            <hr/>
            <p className="center">Click for more Info.</p>
            <div id="no-margin" className="row">
              <div className="col s6 m3 offset-m3">
                { gummy }
                { talc }
              </div>
              <div className="col s6 m3">
                { clay }
                { gorilla }
              </div>
            </div>
        </Parallax>
      </div>
    )
  }
});

export default Products;


{/* <Parallax bgImage="http://www.canadianbeautyandspa.com/wp-content/uploads/2012/01/CTRS_MG_4852-553x369.jpg" strength={400}>
    <br/>
    <h1 className='sitefont center'>PRODUCTS</h1>
    <div className="row">
        <Card
            className="col m3"
            header={<CardTitle reveal image={"http://juniorsbarbershop.com/wp-content/uploads/gummyhairgel.jpg"} waves='light'/>}
            title="DAT' HAIRGEL"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>

        <Card
            className="col m3"
            header={<CardTitle reveal image={"http://barber.nl/wp-content/uploads/2012/12/IMG_8010.jpg"} waves='light'/>}
            title="TALC POWDER"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
    </div>


     <div className="row">
      <div className="col s3 m3">
        <Card
            header={<CardTitle reveal image={"http://target.scene7.com/is/image/Target/13974383?wid=450&hei=450&fmt=pjpeg"} waves='light'/>}
            title="GORILLA GEL"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
      </div>
      <div className="col s3 m3">
        <Card
            header={<CardTitle reveal image={"http://gentlemensapproach.co.nz/wp-content/uploads/2016/05/Coltrane_Clay_1-768x768.png"} waves='light'/>}
            title="GENTLEMAN'S PUTTY"
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
      </div>
    </div>
</Parallax>

image-size: 250px;*/}
