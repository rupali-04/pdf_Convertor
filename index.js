const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

    // Create a browser instance
    const browser = await puppeteer.launch();
  
    // Create a new page
    const page = await browser.newPage();
  
    //Get HTML content from HTML file
    const html = "<html>"+
    "<head> </head> <body> <center><h1>Welcome</h1></center> " +
        " <table border='1px'>  <thead> <tr> <th>Sr.</th> <th>Product Name</th> <th>Price</th> " +
"  </tr> </thead> <tbody> <tr> <th>1.</th> <th>Car </th> <th>Rs. 200</th> </tr> " +
" <tr> <th>2.</th> <th>Bike </th> <th>Rs. 400</th> </tr> " +
"</tbody>      </table> </body> </html>";
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
  
    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');
  
    // Downlaod the PDF
    const pdf = await page.pdf({
      path: 'result.pdf',
      margin: { top: '10px', right: '50px', bottom: '10px', left: '50px' },
      printBackground: true,
      format: 'A4',
    });
  
    // Close the browser instance
    await browser.close();
  })();