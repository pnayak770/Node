import axios from "axios";
import {load} from "cheerio";
import xlsx from "xlsx";
import fs from "fs";

const fileName = "./file.txt"
const url = "https://internshala.com/jobs/matching-preferences/"
async function dataScraping(){
    try{
        const response = await axios.get(url)
        writeData(fileName,response.data)
        let finalData = readData(fileName);
        const html=finalData;
        const j$=load(html);

        const data=[];

        
        
        const jobs = j$('.container-fluid.individual_internship.view_detail_button.visibilityTrackerItem');


        // console.log(jobs.length);
        
        
        jobs.each((_,el)=>{
            const conatiner=j$(el);
            
            const jname=conatiner.find('.job-internship-name').text();
            console.log(jname);
            const cname=conatiner.find('.company-name').text();
            const mode =conatiner.find('span a').text();
            const postDate=conatiner.find('.status-success span').text();
            
            data.push([
                jname,
                cname,
                mode,
                postDate,               
               
            ])
        

       })

       const workbook=xlsx.utils.book_new();
       const sheet=xlsx.utils.aoa_to_sheet(data);

       xlsx.utils.book_append_sheet(workbook,sheet,'Scraped Data');

       xlsx.writeFile(workbook,"scrapedData.xlsx");

    }
    catch(error){
        console.log(error);
    }
}


function writeData(fileName,dataInput){
    try {
        let jsonFile = JSON.stringify(dataInput)
        fs.writeFileSync(fileName, jsonFile)

    } catch (error) {
        console.log(error);
    }
}


function readData(fileName){
    try {
        const fileContent = fs.readFileSync(fileName, 'utf8');

        const dataOutput = JSON.parse(fileContent);

        return dataOutput;
        
    } catch (error) {
        console.log(error);
    }
}

dataScraping();