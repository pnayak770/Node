import axios from "axios";
import {load} from "cheerio";
import xlsx from "xlsx";



async function phone(){

    const url ="https://www.amazon.in/s?k=phone&page=3&crid=181O3SZ6KZAQZ&qid=1724494851&sprefix=phone%2Caps%2C501&ref=is_pn_2";

    try{
        const responce=await axios.get(url);
        
        const html=responce.data;
        const j$=load(html);

        const data=[];

        
        const phones=j$('[data-component-type="s-search-result"]');
        
        phones.each((_,el)=>{
            const conatiner=j$(el);
            
            const name=conatiner.find('h2').text();
            const price=conatiner.find('.a-price-whole').text();
            const rating =conatiner.find('.a-icon-star-small').text();
            
            data.push([
                name,
                price,
                rating,
                "available"
            ])
        

       })

       const workbook=xlsx.utils.book_new();
       const sheet=xlsx.utils.aoa_to_sheet(data);

       xlsx.utils.book_append_sheet(workbook,sheet,'Scraped Data');

       xlsx.writeFile(workbook,"scrapedData.xlsx");


    }catch(e){
        console.log(e)
    }

}
phone();