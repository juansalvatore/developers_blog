module.exports = {
  // mongoURI: 'mongodb://localhost:27017/dev_blog',
  mongoURI: process.env.MONGO_URI,
  // JWT secret or key (Used for logging user in /routes/api/users)
  secretOrKey: process.env.SECRET_OR_KEY,
}
