






"use client";
import { RSC_HEADER } from "next/dist/client/components/app-router-headers";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DataFetchClient = () => {
  const [userData, setUserData] = useState(null);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const revealUserGender = async () => {
      const res = await fetch(`https://api.genderize.io/?name=${userName}`);
      const data = await res.json();
      setUserData(data); // ✅ save to state
    };
    if (userName) revealUserGender();
  }, [userName]);

  if (!userData) return <h1>Loading...</h1>;

  const isMale = userData.gender === "male";
  const confidencePercentage = userData.probability * 100;

  return (
    <h1>
      Data Fetching Server {userData.name} - {confidencePercentage}%
    </h1>
  );
};

export default DataFetchClient  ;
