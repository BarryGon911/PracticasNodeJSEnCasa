import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 8,
    maxlength: 25,
  },
  isAdmin: {
    type: Boolean,
    dafault: false,
  },
});

// const Usuario = mongoose.Model("Usuario", UsuarioSchema);
// module.exports = Usuario;

const User = mongoose.model("User", userSchema);
export default User;
