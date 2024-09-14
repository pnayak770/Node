import express from 'express';
import {addNewJob,deleteJob,getAllJobs,updateJob} from '../controllers/jobcontollers.js';


const route=express.Router();

route.get('/getAllJob',getAllJobs);


route.post('/addJob',addNewJob);


route.delete('/deleteJob/:id',deleteJob);


route.put('/updateJob',updateJob);

export default route;