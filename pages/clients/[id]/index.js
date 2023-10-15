import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projectA" },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
