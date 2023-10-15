import React from "react";
import { useRouter } from "next/router";
const PortfolioProjectPage = () => {
  const router = useRouter();
  // http://localhost:3000/portfolio/2023
  console.log(router.pathname, router.query);
  // /portfolio/[projectid]
  // {projectid: '2023'}
  // projectid
  // :
  // "2023"
  return <div>PortfolioProjectPage</div>;
};

export default PortfolioProjectPage;
