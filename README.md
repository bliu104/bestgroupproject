![ImageOfReact](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png)
# Project Name
Project name is a full stack MERN (MongoDB,Express.js,React.js,Node.js) online platform focusing on e-commerce. This online market place focuses on selling books, electronics, video games and more. Our website enables a user friendly experience for a seller to list their items to guests or other members. Our beautifull design is very welcoming, allowing navigation to all the corners of our website! Backend functionality gives the user the ability to create, change, delete or list all of the items they stored into the the database. With the protection of user-authorization.

## Prerequisites
All code is required to get started

 clone repo using your local machine
 ```git clone https://github.com/bliu104/bestgroupproject.git```
 ## Installation instructions
 ### Front-end
 ```cd brestgroupproject
 npm i
 npm run dev
 ```
 ### Back-end
 ```
 command + T
 cd client
 npm i
 npm start
```

## Coding Styles
- Standard Tab or Two spaces
- Indention one Tab
- Blank can be added for readability
- camelCase for function, variables for javascript code
- First Letter Capitalize in Components.jsx
- Commented out breaks are allowed for readability
- Case switch statements must be proper Indented

```createFilterColor = () => {
    const { items } = this.state;
    return uniqueColor(items).map(color => {
      return <button onClick={this.changeColor}>{color}</button>;
    });
  };
  ```

## Deployment
- Front-end deployed on Surge
- Back-end deployed on Heroku
- MongoDB database deployed on Cloud Altas

## Items Database 
- Full stack MERN application (MongoDB,Express.js,React.js,Node.js)

## Features
- CRUD functionality: 
- Ability to create, delete, edit, and view items utilizing a cloud database 
- Authentication 
- User must be signed in or sign up to view, edit, delete, and create items 
- Search bar to search through items 
- Filter by color, price, and condition
- Sort items alphabetically or by price
- Contact us page for feedback or customer support
- Email communication with page visitors 

## UI Features 
- Dark/Light Mode - save energy by switching to dark mode
- Light mode also features a soothing customized color palette 
- Features a carousel displaying available items by category 
- Search Bar inorder to shorten item list
- Filter and sort for better user experience

## Responsiveness
- Multiple breakouts to accommodate different devices
- Desktop
- Tablet
- Mobile

## Design
- use flexbox
- use grid

## Tools used 
- React.js 
- MongoDB/Mongoose 
- Express.js/Node.js
- Heroku 
- Surge 
- React Bootstrap
- Axios
- JWT Password Authentication

## Color Pallete used

![color pallete](https://i.imgur.com/XpEzQZtm.png)


