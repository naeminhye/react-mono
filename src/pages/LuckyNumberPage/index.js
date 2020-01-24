import React, { useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  Icons,
  Input,
  CheckBox,
  RadioBox,
  Uploader,
  FlipCard
} from "components";

// Icons.RedEnvelope

const luckyMoney = [ "10,000đ", "20,000đ", "30,000đ" ]

const LuckyNumberPage = props => {

    return (
        <div>
            <FlipCard 
                clickable={true}
                front={
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', fontFamily: 'Montserrat, Arial', fontSize: '64px', fontWeight: 900}}>1</div>
                }
                back={
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', fontFamily: 'Montserrat, Arial', fontSize: '64px', fontWeight: 900}}>10,000đ</div>
                }
                frontButton="Flip"
                backButton="Back" />
        </div>
    )
}

export default LuckyNumberPage;