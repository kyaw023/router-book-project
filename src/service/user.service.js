
import { api } from "./baseUrl";


export const Auth = async (endPoints,formData) => {
  try {
    const {data} = await api.get(endPoints);

    const comparisionEmail = data.find(d => d.email === formData.email);

    if(!comparisionEmail){
        throw new Error("User not found")
    }

    const comparisionPassword = comparisionEmail.password === formData.password;

    if(!comparisionPassword){
        throw new Error("Password is not correct")
    }
    return comparisionEmail;

  } catch (e) {
    throw new Error(e.message)
  }
};