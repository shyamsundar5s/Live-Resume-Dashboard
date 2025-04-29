export default async function handler(req, res) {
   const response = await fetch('https://api.github.com/users/codebyjyotsna');
   const data = await response.json();

   res.status(200).json({
      commits: 150, // Example static data (replace with real commit data)
      repositories: data.public_repos,
      followers: data.followers,
   });
}
