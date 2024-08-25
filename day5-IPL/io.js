import puppeteer from "puppeteer";
import xlsx from "xlsx";
import fs from "fs";

async function scrapeIPLStats() {
    const filename = './file.json';
    const seasons = ['2024', '2023', '2022', '2021', '2020'];
    const categories = [
        { name: 'Most Runs', selector: 'most-runs' },
        // { name: 'Most Fours', selector: 'most-fours' },
        // { name: 'Most Sixes', selector: 'most-sixes' },
        // { name: 'Most Centuries', selector: 'most-centuries' },
        // { name: 'Most Fifties', selector: 'most-fifties' }
    ];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const workbook = xlsx.utils.book_new();

    for (let season of seasons) {
        let seasonData = {};  // Store data by season

        for (let category of categories) {
            const url = `https://www.iplt20.com/stats/${season}`;
            await page.goto(url, { waitUntil: 'networkidle2' });

            const data = await page.evaluate(() => {
                const rows = document.querySelectorAll('tr[ng-repeat]');
                const extractedData = [];

                rows.forEach((row, index) => {
                    if (index < 10) {
                        const player = row.querySelector('.st-ply-name')?.textContent.trim();
                        const runs = row.querySelectorAll('td')[2]?.textContent.trim();

                        if (player && runs) {
                            extractedData.push({ name: player, runs: runs });
                        }
                    }
                });

                return extractedData;
            });

            seasonData[category.name] = data;  

            
            const sheetData = data.map(item => [item.name, item.runs]);
            const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
            xlsx.utils.book_append_sheet(workbook, worksheet, `${season} - ${category.name}`);
        }

       
        appendToJSONFile(season, seasonData, filename);
    }

    await browser.close();

   
    xlsx.writeFile(workbook, "IPL_Stats_Last_5_Seasons.xlsx");
    console.log("Data saved to IPL_Stats_Last_5_Seasons.xlsx");
}

function appendToJSONFile(season, seasonData, filename) {
    let existingData = {};

   
    if (fs.existsSync(filename)) {
        try {
            const fileContent = fs.readFileSync(filename, 'utf8');
            existingData = JSON.parse(fileContent);
        } catch (error) {
            console.error("Error parsing JSON from file, starting with an empty object.", error);
            existingData = {};
        }
    }

   
    existingData[season] = seasonData;

   
    const jsonData = JSON.stringify(existingData, null, 2);
    fs.writeFileSync(filename, jsonData);
}

scrapeIPLStats();
