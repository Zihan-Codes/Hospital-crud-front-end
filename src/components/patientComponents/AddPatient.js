import React, {useState, useEffect} from 'react'
//import DoctorService from '../services/DoctorService'
import {useNavigate, Link, useParams} from 'react-router-dom'
import PatientService from '../../services/PatientService'


const AddPatient = () => {

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')

    const history = useNavigate();
    const {id} = useParams();

     const saveOrUpdatePatient = (e) =>{
         e.preventDefault();

         const patient = {name, age, address}

        if(id){

            if(!name || !age || !address ){
                alert("Fill All the fields");
               
            }else{
           
          //  PatientService.updatePatient(id, patient).then((Response) => {
                PatientService.updatePatient(id, patient).then((Response) => {
                 
           
                history('/');
 
            }).catch(error => {
                console.log(error);
            })
        }
        }else{

            if(!name || !age || !address ){
                alert("Fill All the fields");
               
            }else{
            PatientService.createPatient(patient).then((Response) => {

                console.log(Response.data)
                
                    history('/');
                
                
    
            }).catch(error => {
                console.log(error)
            })
        }
        }

        

    }

    useEffect(() => {
      PatientService.getPatientById(id).then((Response) => {
        setname(Response.data.name)
        setage(Response.data.status)
        setaddress(Response.data.fees)

      }).catch(error => {
        console.log(error)
      })
    }, [])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Doctor</h2>
        }else{
            return <h2 className='text-center'>Add Doctor</h2>
        }
     }
    


  return (
    <div>
        
        <br /> <br />

        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    
                    {/* {
                        title()
                    } */}

                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Doctor Name :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Name'
                                 name='name'
                                 className='form-control'
                                 value={name}
                                 onChange = {(e) => setname(e.target.value)}
                                 
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Status :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Age'
                                 name='status'
                                 className='form-control'
                                 value={age}
                                 onChange = {(e) => setage(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Fees :</label>
                                <input
                                 type= "text"
                                 placeholder='Enter Address'
                                 name='fees'
                                 className='form-control'
                                 value={address}
                                 onChange = {(e) => setaddress(e.target.value)}
                                >
                                </input>
                            </div>

                            {/* <button className='btn btn-success' onClick={(e) => saveOrUpdatePatient(e)}>Submit</button>
                            <Link to={'/'} className="btn btn-danger">Cancel</Link> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient