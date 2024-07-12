import { useState } from "react";
import styled from "styled-components";
const RoleDice =({roleDice,currentDice}) =>{
    
    



    return(
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/Images/dice/dice_${currentDice}.png`} alt="dice 1"/>
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}
export default RoleDice;
const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
}
`;