import { useEffect, useState } from 'react';

export default function LinkedInStats() {
   const [stats, setStats] = useState(null);

   useEffect(() => {
      fetch('/api/linkedin')
         .then((res) => res.json())
         .then((data) => setStats(data));
   }, []);

   if (!stats) return <div>Loading LinkedIn Stats...</div>;

   return (
      <div>
         <h2>LinkedIn Stats</h2>
         <p>Connections: {stats.connections}</p>
         <p>Profile Views: {stats.views}</p>
         <p>Posts: {stats.posts}</p>
      </div>
   );
}
