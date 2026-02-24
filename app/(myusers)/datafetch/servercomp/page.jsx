const DataFetchServer = async (props)=>{
    const searchParams = await props.searchParams;
    const userName = searchParams.name;
const res = await fetch(`https://api.genderize.io/?name=${userName}`);
const userData = await res.json();
console.log(userData);
const confidencePercentage = userData.probability * 100;


    return <h1>Data Fetching Server {userData.name} - {confidencePercentage} </h1>
};

export default DataFetchServer;