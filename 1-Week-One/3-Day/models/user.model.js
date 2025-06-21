const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
