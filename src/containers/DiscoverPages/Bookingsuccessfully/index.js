import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Button } from 'antd';
import './index.scss'

import PayImage from '../../../assets/images/checkout-img.png';

const Bookingsuccessfully = () => {
    return (
        <div className='checkout-discover-wrapper'>
            <div className='checkoutdiscover-inner'>
                <Container>
                    <Row>
                        <Col>
                            <div className='checkout-discover-success'>
                                <div className='upper-section'>
                                    <div className='success-check' data-aos='zoom-in' data-aos-duration="1000">
                                        <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                    </div>
                                    <h2>Congratulations</h2>
                                    <p>Booking received successfully</p>
                                    <Button type="primary">Done</Button>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={PayImage} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Confirmed</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bottom-section'>
                                    <p>You can access ticket from My Booking section under profile</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Bookingsuccessfully;