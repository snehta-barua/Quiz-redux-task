import React, { useState} from "react";
import quizData from "./data";
import {  connect } from "react-redux";
import { selectedOption } from "./Actions/correctAnsAction";

const Quiz = (props) => {
    const [currentQus, setCurrentQus] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [nextBtn,setNextBtn]=useState(false);
    const [msg,setMsg]=useState(false);

    const handleSelectedOption = (id) => {
        
        props.selectedOption(id)
        const {selectedOpt} = props;
        if (id === quizData[currentQus].correctIndex) {
            setScore(score + 1);
            setMsg(true)

        }else{
            setMsg(false)
        }      
    
        if(!nextBtn){
            setNextBtn(true);
        }
        
    }
const nextSlide= () =>{
    let nextQus = currentQus + 1;
    if (nextQus < quizData.length) {
        setCurrentQus(nextQus);
        setNextBtn(false);
    }
    else {
        setShowScore(true);
    }
}


    return (
        <>
            {showScore ?
            (<div className="score-container"><h2>You Scored {score}/{quizData.length}</h2>
            <h1>Thank You !!!</h1>
            </div>)
            :
            (<div className="quiz-container">
                <div className="quiz-header">
                    <span>Question {currentQus+1}</span>/{quizData.length}
                </div>
                <div className="question-section">
                    {quizData[currentQus].question}
                </div>
                <div className="answer-section">
                    {quizData[currentQus].answers.map((option, index) => {
                        return (
                            <button className="option-btn" onClick={() => handleSelectedOption(index)}>{option}</button>
                        )
                    })}
                </div>
                {msg?
                <span className="rMsg">Correct Answer</span>
            :
            <span className="wMsg">Wrong Answer</span>
            }
                {nextBtn ? 
                (<button className="next-btn" onClick={nextSlide}>Next</button>)
            :
            (<button className="next-btn" disabled>Next</button>)}
            

            </div>)
}
        </>
    )
}

const mapStateToProps=(state) =>{
    return {
       
        selectedOpt:state
        
    }
}

const mapDispatchToProps = dispatch => {
return{
    selectedOption : id=>dispatch(selectedOption(id))
}

}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);