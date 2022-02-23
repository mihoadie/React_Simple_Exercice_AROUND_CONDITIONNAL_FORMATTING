# Styling React Components_Simple_Exercice_AROUND_CONDITIONNAL_FORMATTING

React Simple Exercice \_ No connection to DataBase/API Rest. fully based on Maximilian Scharzmuller complete guide tutorial
Aim is to go deeper into conditionnal formatting examples (CSS MODULES MANAGEMENT + CLASSIC CSS FILES + STYLED COMPONENTS)

TO CHECK THE RESULT, TRY TO SEND A NEW GOAL IF INPUT TEXT IS EMPTY --> CONDITIONNAL FORMATTING SHOULD THEN APPLY

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Component's architecture

                                            index.js      --> main
                                                |
                                                |
                                              App.js      --> with default state (Array),  [courseGoals, setCourseGoals]
                                                |
                                                |
                                               / \
                                              /   \
                                             /     \
                                            /       \
                             ______________/         \
                    CourseInput.js                    CourseGoalList.js
                +FormControl (styled)
                  [[method props:                    [[method props:
            onAddGoal={addGoalHandler}]]       onDeleteItem={deleteItemHandler}]]
                            |
                            |                           [[data props:
                            |                         items={courseGoals}]]
                            |                                  |
                            |                                   |
                            |                                   |
                      button.js                                 |
                [[data props: style]]                           \
                                                                 \
                                                                  \
                                      +                            \
                                                                    |\_________________________
                                                                    |                          |
                                                                   /|\                         |
                                                                  / | \
                                                                 /  |  \
                                            ____________________/   |   \________________________________
                                           |                        |                                    |
                                CourseGoalItem.js

                                 [[method props:
                        onDelete={props.onDeleteItem}]]

                                 [[data props:
                                key={goal.id}
                                id={goal.id}}]]

                    [[uses props.children for its content]]

### css and conditionnal formatting

through this little example, few approaches are explained to manage conditionnal formatting

- through classic but general css files (making the classes accessible to every component, thus we need to be carefull about names given to avoid repetition and associated non desired layout effects).

- through styled components ( WE NEED TO INSTALL npm install --save styled-components to process to). such approach can be associated without any problems to conditionnal formatting depending on variable values for example, and can be easily associated to media query also (check out the button component or the CourseInput component for further details). be sure, bu doing so, that you do no give .button{} names for example, as you can directly type margin:2px instead of .button{margin:2px}
  declaration of a component is then typed this way:

import styled from "styled-components";
const Button = styled.div`margin:2px;`
also, keep in mind that the sudo management (ex: :hover....) is directly accessible with an &, as well as the combination of a class and a section ex: &input{width:100%} &input:focus{width:80%}

- through css modules (which is the one that is recommanded, by naming our css files CourseInput.module.css for example, and by declaring at the very beginning import styles from "./CourseInput.module.css";)
  by doing so, every class is being transformed as a readible object, and we can then for example declare

          <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
          >
          {/* IF THERE IS A - IN OUR CSS CLASS NAMES, WE THEN NEED TO ADD [''], AS WE CANNOT DIRECTLY TYPE styles.form-control */}
          {/* HERE ABOVE, WE ALSO ADDED A SECOND CLASSNAME THANKS TO `${} ${}` APPROACH, TO ALSO MANAGE CONDITIONNAL FORMATING DEPENDING ON isValid VARIABLE value */}

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
