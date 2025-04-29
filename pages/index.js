import GitHubStats from '../components/GitHubStats';
import BlogStats from '../components/BlogStats';
import LinkedInStats from '../components/LinkedInStats';

export default function Home() {
   return (
      <div className="container">
         <h1>Live Resume Dashboard</h1>
         <div className="stats">
            <GitHubStats />
            <BlogStats />
            <LinkedInStats />
         </div>
         <style jsx>{`
            .container {
               font-family: Arial, sans-serif;
               padding: 2rem;
            }
            .stats {
               display: flex;
               gap: 2rem;
               flex-wrap: wrap;
            }
         `}</style>
      </div>
   );
}
