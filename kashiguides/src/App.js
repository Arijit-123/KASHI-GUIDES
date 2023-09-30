import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import {useState,useEffect} from 'react';

function App() {
  const [arrayvalue, setArrayvalue] = useState([]);
  useEffect(() => {

    try{
    fetch("https://dummyjson.com/users")
    .then(response=>response.json())
    .then(data=> {
      // console.log("dataone",data.users);
    let  array=[];
       for(let i=0;i<=data.users.length;i++)
       {
        console.log("user_one",data.users[i])
       array.push(data.users[i]);
      }

      console.log("arrayone",array);

       setArrayvalue(array);
    })
  
  }
  catch(error){
    console.log("errorone",error);
    alert("the api is not working properly");
  }
  }, [])
  
 
  // console.log("zaveribazaar", data);
  console.log("arrayvalue",arrayvalue);
  return (
    <div>

    <h1 className='newkashi'>Kashi Guides Details</h1>
    <div className='d-flex flex-wrap ms-2' >
{
  arrayvalue.map(item=>(
    <>
  
   <div  style={{marginLeft:"2vw"}}> <Cards firstName={item?.firstName?item.firstName:" "  }  age={item?.age?item.age:""}/></div>
   </>

  ))
}
</div>
    
    </div>
  );
}

export default App;
