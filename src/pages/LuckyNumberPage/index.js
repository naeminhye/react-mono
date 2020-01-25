import React, { useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  Icons,
  Input,
  CheckCard,
  RadioBox,
  Uploader,
  FlipCard
} from "components";

// Icons.RedEnvelope

const CARDS = [ "vạn sự như ý", "an khang thịnh vượng", "đại phú đại quý", "phát tài phát lộc", "công thành danh toại", "phúc lộc an khang", "năm Canh Tý vạn sự như ý", "ngũ phúc lâm môn" ]
const LUCKY_MONEY = [ "1,999đ", "2,999đ", "4,999đ", "9,999đ", "19,999đ", "29,999đ" ]

const LuckyNumberPage = props => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {CARDS.map((card, index) => {
                return <FlipCard 
                    key={index}
                    clickable={true}
                    style={{flex: "1 0 20%", height: "320px"}}
                    front={
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', fontFamily: 'Montserrat, Arial', fontSize: '64px', fontWeight: 900}}>{card}</div>
                    }
                    back={
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', fontFamily: 'Montserrat, Arial', fontSize: '64px', fontWeight: 900}}>{LUCKY_MONEY[getRandomInt(5)]}</div>
                    } />
            })}
        </div>
    )
}

export default LuckyNumberPage;