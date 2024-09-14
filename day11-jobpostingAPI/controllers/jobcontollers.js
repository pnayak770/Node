
import jobModel from "../model/jobModel.js";


export async function addNewJob(req,res){
    const {title,company,location,salary,type,description}=req.body;
    try {
        const newJob = await new jobModel({
            title,
            company,
            location,
            type,
            salary,
            description,
        }).save();
        res.status(200).json({ message: 'Job Created Successfully!', job: newJob });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error.Please Try again later.' });
    }
}

export const updateJob = async (req, res) => {
    const { title, company, location, type, salary,description, jobId } = req.body;
    try {
        const updatedJob = await jobModel.findByIdAndUpdate(
            jobId,
            {title, company, location, type, salary,description},
            { new: true, runValidators: true }
        );
        if (updatedJob == null) {
            res.status(404).json({ message: 'Job not found' });
        } else {
            res.status(201).json({ message: 'Job updated successfully!', job: updatedJob });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await jobModel.findByIdAndDelete(id);
        if (deletedJob == null) {
            res.status(404).json({ message: 'Job not found' });
        } else {
            res.status(200).json({ message: 'Job deleted successfully!', job: deletedJob });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find({});
        res.status(200).json({ message: 'Jobs retrieved successfully!', jobs });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error. Please Try again later.' });
    }
}