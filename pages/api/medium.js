import cheerio from 'cheerio';

export default async function handler(req, res) {
   const response = await fetch('https://medium.com/@codebyjyotsna');
   const html = await response.text();

   const $ = cheerio.load(html);

   // Placeholder logic (replace with scraping logic)
   const views = 5000;
   const posts = 25;
   const followers = 300;

   res.status(200).json({ views, posts, followers });
}
