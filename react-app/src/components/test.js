import 'styles/test.css';

const Test = () => {

    return (
        <>
            <div className="back"></div>
            <div style={{
                marginRight : 100,
                marginTop : 60,
                animationDelay : `115ms`
                }} className="heart"></div>
            <div style={{
                marginLeft : 120,
                marginTop : 40,
                animationDelay : `300ms`
                }} className="heart"></div>
            <div style={{
                marginRight : 300,
                marginTop : 200,
                }} className="heart"></div>
            <div style={{
                marginLeft : 160,
                marginTop : 140,
                animationDelay : `140ms`
                }} className="heart"></div>
            <div style={{
                marginRight : 160,
                marginTop : 0,
                animationDelay : `280ms`
                }} className="heart"></div>
        </>
    );
}
  
export default Test;
  