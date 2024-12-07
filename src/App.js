
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import axios from 'axios';
import UserTable from './components/UserTable';

function App() {
  
  const[users, SetUsers]=useState([]);
  const getAllUsers= async ()=> {
    try {
      axios
      .get("http://localhost:3010/api/allUser")
      .then ((Response)=>{
        console.log("listUsers",Response.data?.result);
        SetUsers(Response.data?.result)
      })
      .catch((error)=> {
        console.log("error",error);
      });
    } catch (error){
      console.log("error",error);
    }
  }

  useEffect(()=>{getAllUsers()},[])

  return (
    <div
    className="bg-gray-100 flex items-center justify-center py-10 min-h-screen"
    > 
    <div className=" w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="text-3xl font-medium text-center py-4 text-pink-500">
          liste des utilisateurs
        </h2>
        <button className="border-2 border-red-800 hover:bg-red-500 hover:text-white py-1 px-3 rounded-full" >
       Ajouter Nv User

        </button>

      </div>
      <div className="md:block">
<UserTable
users={users}
onDelete={()=>{}}
onEdit={()=>{}}
/>
      </div>


    </div>
    </div>
  );
}

export default App;
