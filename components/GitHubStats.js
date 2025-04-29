import { useEffect, useState } from 'react';

export default function GitHubStats() {
   const [stats, setStats] = useState(null);

   useEffect(() => {
      fetch('/api/github')
         .then((res) => res.json())
         .then((data) => setStats(data));
   }, []);

   if (!stats) return <div>Loading GitHub Stats...</div>;

   return (
      <div>
         <h2>GitHub Stats</h2>
         <p>Commits: {stats.commits}</p>
         <p>Repositories: {stats.repositories}</p>
         <p>Followers: {stats.followers}</p>
      </div>
   );
}
