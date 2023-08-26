import axios from "axios";
import { UserModel, UserModelGetRequest } from "../Models/UserModel";
import { Paginate } from "../Models/paginate";

export const createUser = async (body: UserModel) => {
    await axios.post("http://localhost:3000/v1/auth/register", body);
  };



export  const getUsers = async (pageNo:number): Promise<Paginate<UserModelGetRequest>> => {
    const res = await axios.get(`http://localhost:3000/v1/users?page=${pageNo}`);
    return res.data as Paginate<UserModelGetRequest>;
  };  