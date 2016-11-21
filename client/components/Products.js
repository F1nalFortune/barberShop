import React from 'react';
import { Parallax } from 'react-parallax';
import Card from './Card';
import CardTitle from './CardTitle';
import Icon from './Icon';

const Products = React.createClass({
    render: function () {
  	return (
    	<div>
        <Parallax bgImage="http://www.canadianbeautyandspa.com/wp-content/uploads/2012/01/CTRS_MG_4852-553x369.jpg" strength={400}>
            <br/>
            <h1 className='sitefont center'>PRODUCTS</h1>
            <div className="row">
                <Card
                    className="col m3 offset-m2"
                    header={<CardTitle reveal image={"http://juniorsbarbershop.com/wp-content/uploads/gummyhairgel.jpg"} waves='light'/>}
                    title="DAT' HAIRGEL"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>

                <Card
                    className="col m3 offset-m2"
                    header={<CardTitle reveal image={"http://barber.nl/wp-content/uploads/2012/12/IMG_8010.jpg"} waves='light'/>}
                    title="TALC POWDER"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
            </div>

            {/*  GUMMY CARD */}
            {/* TALC CARD */}
            {/* <div className="row">
              <div className="col s3 m3 offset-m3">

                <Card
                    header={<CardTitle reveal image={"http://target.scene7.com/is/image/Target/13974383?wid=450&hei=450&fmt=pjpeg"} waves='light'/>}
                    title="GORILLA GEL"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
              </div>

              <div className="col s3 m3 offset-m3">

                <Card
                    header={<CardTitle reveal image={"http://gentlemensapproach.co.nz/wp-content/uploads/2016/05/Coltrane_Clay_1-768x768.png"} waves='light'/>}
                    title="GENTLEMAN'S PUTTY"
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href="#">This is a link</a></p>
                </Card>
              </div>
            </div> */}
        </Parallax>
      </div>
    )
  }
});

export default Products;
