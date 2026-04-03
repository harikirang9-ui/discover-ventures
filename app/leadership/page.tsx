import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeadershipCards from "../components/LeadershipCards";

const team = [
  {
    name: "Devendra Agrawal, CFA",
    title: "Founder",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/leadership/Devendra%20Agrawal%2C%20CFA.png",
    bio: [
      "A seasoned entrepreneur, banker and investor, Devendra started Dexter in early 2013 with a mission to help entrepreneurs scale up smoothly by simplifying investor search, term sheet negotiation and the overall fundraise process.",
      "With Discover Ventures, Devendra wants to reach out to and support founders on their growth trajectory with strategic financial advice, access to relevant investors, and long-term partnership.",
    ],
    linkedin: "https://www.linkedin.com/in/devendra-agrawal-cfa-85144598/",
    email: "devendra.agrawal@dextercapital.in",
  },
  {
    name: "Bindu Eswara Reddy",
    title: "Vice President",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/leadership/Bindu%20Eswara%20Reddy.png",
    bio: [
      "Bindu brings 15 years of experience across technology, startups, and investing, with a track record of backing high-impact early-stage companies.",
      "Most recently, she led India investments at Rebright Partners, a Japanese venture capital firm, deploying capital into 25 companies across healthcare, agritech, supply chain, logistics, and B2B SaaS.",
      "Earlier roles included leading market-intelligence teams at Tracxn, driving e-commerce growth at Wonderchef, and software engineering at Nokia Networks.",
    ],
    linkedin: "https://www.linkedin.com/in/bindureddye/",
    email: "bindu.reddy@dextercapital.in",
  },
  {
    name: "Mailinie Jauhar",
    title: "Associate Director-New Initiatives",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/leadership/Mailinie%20Jauhar.png",
    bio: [
      "She is a seasoned BFSI professional with 16+ years of expertise in policy, strategy, and analytics across customer lifecycles in retail products. As Vice President and Head of Business - Lending at One Mobikwik Systems Pvt Ltd, she managed the Personal Loans book, driving profitability, growth, revenue and risk initiatives, ensuring regulatory compliance.",
      "Mailinie holds a B.Tech in Textile Technology with a Minor Degree in Business Administration from the Indian Institute of Technology (IIT) Delhi. Her strong academic foundation complements her extensive professional experience, enabling her to excel in high-stakes business environments.",
    ],
    linkedin: "https://www.linkedin.com/in/mailinie/",
    email: "mailinie.jauhar@dextercapital.in",
  },
  {
    name: "Pranjal Jain",
    title: "Analyst",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/leadership/Pranjal%20Jain.png",
    bio: [
      "Pranjal has over 3 years of experience in investment banking and private equity–focused research, having executed transactions across the consumer, EV finance, and impact sectors. Prior to Dexter, she worked in private equity at Tresvista Financial Services and assisted clients across the deal value chain in various sectors like Cosmetics, Pharmaceuticals etc.",
      "She holds a B.M.S degree from University of Delhi.",
    ],
    linkedin: "https://www.linkedin.com/in/pranjal-jain-2288031b2/",
    email: "pranjal.jain@dextercapital.in",
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-navy overflow-x-hidden">
      {/* Navbar */}
      <section className="bg-navy">
        <Navbar active="leadership" />
      </section>

      {/* Scroll-driven Leadership Cards */}
      <LeadershipCards team={team} />

      {/* Footer */}
      <Footer variant="inner" />
    </div>
  );
}
