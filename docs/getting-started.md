## Getting started

This is a small guide about the UI of Oasis.

Technologies involve:
- React (client framework)
- [React-router](https://reacttraining.com/react-router/)  (client side routing)
- [React-Redux](https://react-redux.js.org/) (data flow)
- [React-Leaflet](https://react-leaflet.js.org/) (maps)
- [Styled components](https://www.styled-components.com/) (styling)
- [BlueprintJS](https://blueprintjs.com/docs/#core) (pre-make react components)
- [ESlint](https://eslint.org/) (JS linter)

The project is a React application created with CREATE REACT APP from facebook.

The entry point of the application is src/index here is the initialization of libraries styles and the mounting of the react application

The next part to follow is src/App.js This is the main component that we are using, Here, is the initialization of Redux, the global layout and client router. Here is just the declaration that / goes to IndexView componente and /login to Login component.

#### Adding a new route + view

IndexView is created in src/pages/IndexView, in the folder pages is where we should create new views. To add one, just create a new folder and use the semantic of IndexView line 32 to create a new rout and then refer the new componente exported from folder.

[here you can read more abour React-Router](https://reacttraining.com/react-router/web/guides/quick-start)