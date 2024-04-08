# React-Router
### All About => React Router

```
C:\Users\Arindam>node -v
v20.10.0

C:\Users\Arindam>node --version
v20.10.0

C:\Users\Arindam>npm -v
10.2.3

C:\Users\Arindam>npm --version
10.2.3

C:\Users\Arindam>npx -v
10.2.3

C:\Users\Arindam>npx --version
10.2.3
```

> **How to create React project by npx**
```
npx create-react-app your-project-name
```

> **Package to work with React Routes**
```
npm i react-router-dom
```

> **How to check React Version by CMD**
```
G:\React\React-Router\react-router-bs5cdn>npm view react version
18.2.0
```
> **How to change React port number in Windows**
```
"start": "set PORT=3006 && react-scripts start"
```

> **How to change React port number in Linux/Ubuntu or Mac**
```
"start": "PORT=3006 react-scripts start"
"start": "export PORT=3006 react-scripts start"
```

> **How to change React port number using .env file**
```
First Install 'dotenv' package
npm i dotenv

Then create a .env file in root of the project folder
.env

Then add PORT=your_port
PORT=8500

Then npm start
```

## React Router 

```js
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
```

```js
//index.js

//wrap the whole app within the 'BrowserRouter'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```js
//HeaderNav.jsx
import React from 'react'

//to use just like hyperlink
import { Link } from 'react-router-dom';

//to use 'NavLink' => active class added automatically
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
    //if you want to create custom active nav style
    const navItemActiveStyle = ({isActive}) => {
        return {
            fontWeight: (isActive) ? 'bold' : 'normal',
            textShadow: (isActive) ? '0px 0px 5px #000000' : 'none'
        };
    };
    return (
        <>
            <nav>
                ....
                ....
                <Link to="/" className="navbar-brand"><strong>REACT - ROUTER</strong></Link>
                ....
                ....
                <li className="nav-item">
                    <NavLink to="/" style={navItemActiveStyle} className="nav-link" aria-current="page">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about-us" style={navItemActiveStyle} className="nav-link">
                        About Us
                    </NavLink>
                </li>
            </nav>
        </>
    )
}
```

```js
//App.js

//Routes & Route use for define routes
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/contact-us" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}
```