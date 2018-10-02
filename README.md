# DevConnector

### Connect with programmer friends around the globe 🌏

## API Routes 

### Users

Create a new user (public): <b>```POST api/users/register```</b><br/><br/>
Login User / Returning JWT Token (public): <b>```POST api/users/login```</b><br/><br/>
Return current user (protected): <b>```GET api/users/current```</b><br/><br/>
  
### Profile

Get user profile (public): <b>```GET /api/profile```</b><br/><br/>
Create or edit user profile (protected): <b>```POST /api/profile```</b><br/><br/>
Get array of profiles (public): <b>```GET api/profile/all```</b><br/><br/>
Get profile by handle (public): <b>```GET api/profile/handle/:handle```</b><br/><br/>
Get profile by User ID (public): <b>```GET api/profile/user/:user_id```</b><br/><br/>
Add experience to profile (protected): <b>```POST api/profile/experience```</b><br/><br/>
Add education to profile (protected): <b>```POST api/profile/education```</b><br/><br/>
Delete experience from profile (protected): <b>```DELETE api/profile/experience/:exp_id```</b><br/><br/>
Delete user and profile (protected): <b>```DELETE api/profile```</b><br/><br/>

### Posts

Get all posts (public): <b>```GET /api/posts```</b><br/><br/>
Get user posts by id (public): <b>```GET /api/posts/:id```</b><br/><br/>
Delete user posts by id (protected): <b>```DELETE /api/posts/:id```</b><br/><br/>
Create or edit user profile (protected): <b>```POST /api/posts```</b><br/><br/>
Like a post (protected): <b>```POST /api/posts/like/:id```</b><br/><br/>
Unlike a post (protected): <b>```POST /api/posts/unlike/:id```</b><br/><br/>
Post a comment (protected): <b>```POST /api/posts/comment/:id```</b><br/><br/>
Delete a comment (protected): <b>```DELETE /api/posts/comment/:id```</b><br/><br/>


## Tech

- [Reactjs](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps
- [styled-components](https://www.styled-components.com/) - Visual primitives for the component age 💅
- [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design.
- [node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Document database

## ToDo

### Back-end ✓

- [x] Basic express setup:

  - [x] MongoDB Setup
  - [x] Install dependencies and basic server setup
  - [x] Connecting to MongoDB with Mongoose
  - [x] Route files with Express router

- [x] User API routes and JWT authentication

  - [x] Creating User model
  - [x] User registration
  - [x] Email and Password login
  - [x] Creating the JWT
  - [x] Handling validation

- [x] Profile API routes

  - [x] Creating Profile model
  - [x] Current User profile route
  - [x] Creating and Updating profile routes
  - [x] Profile fields validations
  - [x] Add experience and education to profile
  - [x] Delete experience and education from profile

- [x] Post API routes
  - [x] Creating Post model
  - [x] Post create route
  - [x] Get and Delete post routes
  - [x] Post like and unlike routes
  - [x] Add and remove comment routes

### Front-end

- [x] Landing + register + login

  - [x] Create react app
  - [x] Create basic layout files
  - [x] Style navbar, footer and landing

- [x] React Router + Register + Login

  - [x] Create landing, register and login routes
  - [x] Create Register form
  - [x] Create Login form
  - [x] Add state to Register
  - [x] Add state to Login
  - [x] Error handling
  - [x] Redux store and chrome extension setup
  - [x] Add Redux to registration
  - [x] Add Redux to login
  - [x] Login form functionality
  - [x] Logout and conditional navbar

- [ ] Dashboard and profile...

- [ ] Posts and comments...

- [ ] Prepair and deploy...

## License

MIT © **[`Juan Salvatore`](http://juansalvatore.com)**
