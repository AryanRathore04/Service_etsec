import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GetStartedForm from "../components/GetStartedForm";
import { serviceGroups } from "../data/servicesData";

// Helper to read query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const GetStartedPage = () => {
  const query = useQuery();
  const initialGroup = query.get("group") || "";
  const servicesParam = query.get("services") || ""; // comma-separated service ids
  const initialServices = [];
  if (servicesParam) {
    const ids = servicesParam
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    // Map ids to service titles using serviceGroups
    ids.forEach((id) => {
      for (const group of serviceGroups) {
        const found = group.services.find((s) => s.id === id);
        if (found) {
          initialServices.push(found.title);
          break;
        }
      }
    });
  }
  const navigate = useNavigate();

  return (
    <div>
      <GetStartedForm
        isOpen={true}
        onClose={() => navigate(-1)}
        initialGroup={initialGroup}
        initialServices={initialServices}
      />
    </div>
  );
};

export default GetStartedPage;
