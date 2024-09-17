import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";

const Services = () => {
  const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  };
  const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
  return {
    encryptPassword,
    comparePassword,
  };
};
export default Services;
