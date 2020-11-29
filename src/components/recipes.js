import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBBtn } from 'mdbreact'

function recipes({image, title, calories}) {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard style = {{maxWidth: '18rem'}}>
                        <MDBCardImage className="img-fluid" src={image} waves />
                        <MDBCardBody>
                            <MDBCardTitle>{title}</MDBCardTitle>
                            <h6>Calories: {calories.toFixed(3)}</h6>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default recipes
