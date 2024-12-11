import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section7() {
    return (
        <div>
            <section className='contact_section'>
                <Row className='justify-content-center'>
                    <Col sm={8} className='text-center'>
                        <h4>We Guarantee</h4>
                        <h2>30 Minutes Delivery!</h2>
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                            dolor primis libero tempus, blandit a cursus varius luctus neque
                            magna
                        </p>
                        <Link to='/' className='btn btn_red px-4 py-2 rounded-0'>
                            Call: 999-888-7777
                        </Link>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Section7
