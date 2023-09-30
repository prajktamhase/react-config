import Util from "./../view/Util/Util.json";
function Home(){
    return(
        <>
        <div>
            <h1>{Util.title}</h1>
            <h2>{Util.description}</h2>
            <h3>{Util.price}</h3>
        </div>
        </>
        )
}
export default Home
