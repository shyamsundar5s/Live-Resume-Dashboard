import { useEffect, useState } from 'react';

export default function BlogStats() {
   const [stats, setStats] = useState(null);

   useEffect(() => {
      fetch('/api/medium')
         .then((res) => res.json())
         .then((data) => setStats(data));
   }, []);

   if (!stats) return <div>Loading Blog Stats...</div>;

   return (
      <div>
         <h2>Blog Stats</h2>
         <p>Views: {stats.views}</p>
         <p>Posts: {stats.posts}</p>
         <p>Followers: {stats.followers}</p>
      </div>
   );
}
