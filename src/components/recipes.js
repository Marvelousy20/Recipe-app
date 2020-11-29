import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBBtn } from 'mdbreact'
import styles from './recipe.module.css'

function recipes({image, title, calories, ingredients, recipe}) {
    
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard style = {{maxWidth: '18rem'}} className = {styles.card}>
                        <MDBCardImage className="img-fluid" src={image} waves />
                        <MDBCardBody>
                            <MDBCardTitle>{title}</MDBCardTitle>
                            <h6>Calories: {calories.toFixed(3)}</h6>
                            {recipe.recipe.dietLabels.length !== 0 && <h6>Diet Labels: {recipe.recipe.dietLabels}</h6>}
                            <MDBCardText>
                                <ol>
                                    {ingredients.map((ingredient, index) => (
                                        <li key = {index}>
                                            {ingredient.text}
                                        </li> 
                                    ))}
                                </ol>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default recipes
