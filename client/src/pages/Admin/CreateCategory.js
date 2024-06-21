import React,{useEffect,useState} from 'react';
import Layout from '../../components/layout';
import AdminMenu from '../../components/AdminMenu';
import { toast } from "react-toastify";
import axios from 'axios';
import CategoryForm from './../../components/Form/CategoryForm';


const CreateCategory = () => {
  const [category,setCategory] = useState([])
  const [name,setName] = useState("")

  //handle form 
  const handleSubmit = (e) =>{
    e.preventDefault()
    try{

    }
    catch(error){
      console.log(error)
      toast.error("Something went wrong in input form");
    }
  }

  //get all category 
  const getAllCategory = async() =>{
    try{
     const {data} = await axios.get('/api/v1/category/get-category')
     if(data.success){
      setCategory(data.category);
     }
    }
    catch(error)
    {
     console.log(error); 
     toast.error("Something went wrong in getting category");
    }
  };
  useEffect(() =>{
    getAllCategory();
  },[]);



  return (
    <Layout title={"Dasdhboard - Create Category"}>
        <div className="container-fluid m-3 p-3">
    <div className="row">
     <div className="col-md-3">
          <AdminMenu/>
     </div>
     <div className="col-md-9">
     <h1>Manage Category</h1>
     <div className="p-3">
      <CategoryForm/>
     </div>
     <div className="w-75">
     </div>
     <div>
    <table className="table">
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   
    {category?.map((c)=>(
      <>
       <tr>
       <td key={c._id}>{c.name}</td>
      <td>
      <button  className="btn btn-primary">Edit</button>
      </td>
      </tr>
      </>
    ))}
  </tbody>
</table>
</div>
     </div>
    </div>
    </div>
</Layout>
  );
};
export default CreateCategory;
