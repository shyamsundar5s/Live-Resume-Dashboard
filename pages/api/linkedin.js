import puppeteer from 'puppeteer';

export default async function handler(req, res) {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();

   await page.goto('https://www.linkedin.com/in/codebyjyotsna'); // Replace with your profile URL

   // Example data (replace this with scraping logic)
   const connections = 500;
   const views = 1000;
   const posts = 30;

   await browser.close();

   res.status(200).json({ connections, views, posts });
}
