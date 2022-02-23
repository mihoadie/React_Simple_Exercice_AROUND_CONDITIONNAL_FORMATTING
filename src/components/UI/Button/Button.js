import React from "react";
import styles from "./Button.module.css"; // now linked to Button.module.css and not Button.css anymore
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
// we changed the name of the className, to put it dynamic with a styles object and its associated keys (out css classes)
// indeed, by processing "import styles from ;/Button.module.css", react will understand, through the .module. rename, that the file is a Css module
// and though, react will simply convert styles as an object, and we can access our css classes, by simply calling them like className={styles.button}
export default Button;

// ##########################OTHER OPTION

// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// export default Button;

// ##########################OTHER OPTION

// import './Button.css';
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

// export default Button;
