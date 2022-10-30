import axios from "axios";

const PATIENT_BASE_REST_API_URL = 'http://localhost:8080/api/ead/patients';

class PatientService{

    getAllPatients(){
        return axios.get(PATIENT_BASE_REST_API_URL)
    }

    createPatient(patient){
       // return axios.post(PATIENT_BASE_REST_API_URL, patient)

       return axios.post(PATIENT_BASE_REST_API_URL, patient)
    }

    addPatient(patient){
        return axios.post(PATIENT_BASE_REST_API_URL, patient)
    }

}

export default new PatientService();