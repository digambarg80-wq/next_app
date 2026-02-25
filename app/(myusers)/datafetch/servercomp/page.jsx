const DataFetchServer = async ({ searchParams }) => {
  const userName = searchParams?.name || "unknown"; // ✅ no await
  const res = await fetch(`https://api.genderize.io/?name=${userName}`);
  const userData = await res.json();

  const confidencePercentage = userData.probability * 100;

  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <h1>
      Data Fetching Server {userData.name} - {confidencePercentage}%
    </h1>
  );
};

export default DataFetchServer;
