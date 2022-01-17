import 'styles/test3.css';

const Test3 = () => {

    return (
        <>
            <div className="cloud_back"></div>
            <div style={{
                marginRight : 130,
                marginTop : 160,
                animationDelay : `115ms`
                }} className="cloud"></div>
            <div style={{
                marginLeft : 120,
                marginTop : 40,
                animationDelay : `300ms`
                }} className="cloud"></div>
            <div style={{
                marginRight : 300,
                marginTop : 200,
                }} className="cloud"></div>
            <div style={{
                marginLeft : 160,
                marginTop : 140,
                animationDelay : `140ms`
                }} className="cloud"></div>
            <div style={{
                marginRight : 160,
                marginTop : 0,
                animationDelay : `280ms`
                }} className="cloud"></div>
        </>
    );
}
  
export default Test3;
  