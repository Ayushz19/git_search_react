import React,{useState} from 'react'
import DisplayProfile from './DisplayProfile';

function Showprofile() {
    const [userName,setUserName] = useState("");
    const [data,setData] = useState({});


    const onChangeHandler =(e)=>{
        setUserName(e.target.value)
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            setData(originalData);
          }
        })
    }
    return (
        <>
        <div className="container my-5 align-baseline" >
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-1111 bg-green-300 border-green-600 border-b p-4 m-4 rounded  ">GitHub User Profile</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg   border-2 border-sky-500 rounded-lg" placeholder="Type username" type={userName} id="w"  onChange={onChangeHandler}/>
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg h-10 px-5 m-2 rounded-full border-2 border-rose-500 bg-blue-500 shadow-lg shadow-blue-500/50">Search</button>
                        </div>
                        </form>
                        
                    </div>


               
                </div>
            </div>
        </div>
        <DisplayProfile data={data}></DisplayProfile>
        </>

    )
}

export default Showprofile;