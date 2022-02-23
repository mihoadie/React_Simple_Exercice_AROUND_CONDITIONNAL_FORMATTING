/* OPTION 1   : THROUGH STYLED COMPONENTS AND 2 COMPONENTS IN THE SAME FILE
// TO LEAVE THE COMMENTS OF THIS FIRST OPTION: 
// ONLY DELETE THE COMMENT CHARACTERS AT THE VERY BEGINNING OF THE CORRESPONDING LINES, [WITHOUT TOUCHING AT THE ONES WITH MARGINS, ONLY THE VERY STARTING COMMENT SYMBOLS]
#############################################################################

*/

/*
            import React, { useState } from "react";
            import Button from "../../UI/Button/Button";
            import "./CourseInput.css";
            import styled from "styled-components";


            // this file includes in reality two components: CourseInput  and FormControl

            // 1st component: FormControl (replacing the previous conditional formated div)

            const FormControl = styled.div`
              margin: 0.5rem 0;

              & label {
                font-weight: bold;
                display: block;
                margin-bottom: 0.5rem;
                color: ${(props) => (props.invalid ? "red" : "black")};
              }

              & input {
                display: block;
                width: 100%;
                border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
                background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
                font: inherit;
                line-height: 1.5rem;
                padding: 0 0.25rem;
              }

              &input:focus {
                outline: none;
                background: #fad0ec;
                border-color: #8b005d;
              }
            `;
*/
// 2nd component: CourseInput - 1ST WAY TO MANAGE ITS CSS

/*


        const CourseInput = (props) => {
          const [enteredValue, setEnteredValue] = useState("");
          const [isValid, setIsValid] = useState(true);

          const goalInputChangeHandler = (event) => {
            if (event.target.value.trim().length > 0) {
              setIsValid(true);
            }
            setEnteredValue(event.target.value);
          };

          const formSubmitHandler = (event) => {
            event.preventDefault();
            if (enteredValue.trim().length === 0) {
              setIsValid(false);
              return;

*/
/*
             /* la fonction trim permet de supprimer les blancs/espaces au debut et en fin de chaine. 
                    Ceux du milieux, utilisés pour espacer deux chaine de caractere entre elles, sont quant a eux préservés
                */

/*

            } else {
              props.onAddGoal(enteredValue);
            }
          };

          return (
          <form onSubmit={formSubmitHandler}>

*/

//        {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
//        {/* <FormControl className={!isValid && "invalid"}> */}

/*


          <FormControl invalid={!isValid}>
            <label>Course Goal</label>
            <input type="text" onChange={goalInputChangeHandler} />
          </FormControl>

*/
//        {/* </div> */}
/*

          <Button type="submit">Add Goal</Button>
          </form>
            );
          };

          export default CourseInput;


*/

/* OPTION 2   : THROUGH CSS MODULES 
// TO LEAVE THE COMMENTS OF THIS FIRST OPTION: 
// ONLY DELETE THE COMMENT CHARACTERS AT THE VERY BEGINNING OF THE CORRESPONDING LINES, [WITHOUT TOUCHING AT THE ONES WITH MARGINS, ONLY THE VERY STARTING COMMENT SYMBOLS][SANS TOUCHER A CEUX QUI SONT DECALLÉS AVEC LES PAS]
#############################################################################

*/

import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      /* la fonction trim permet de supprimer les blancs/espaces au debut et en fin de chaine. 
          Ceux du milieux, utilisés pour espacer deux chaine de caractere entre elles, sont quant a eux préservés
      */
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* <FormControl className={!isValid && "invalid"}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* IF THERE IS A - IN OUR CSS CLASS NAMES, WE THEN NEED TO ADD [''], AS WE CANNOT DIRECTLY TYPE styles.form-control */}
        {/* HERE ABOVE, WE ALSO ADDED A SECOND CLASSNAME THANKS TO `${} ${}` APPROACH, TO ALSO MANAGE CONDITIONNAL FORMATING DEPENDING ON isValid VARIABLE value */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
