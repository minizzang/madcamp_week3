import 'styles/test1.css';
import 'animate.css';
import { useState } from 'react/cjs/react.development';

const Test = () => {

    // const [content, setContent] = useState("캬캬캬 김민채 바보~~")

    const content = <p>하아하이</p>
    // function Effect1(props) {
    //     return 
    // }
    const Effect1 = () => {
        return <h1 class="animate__animated animate__rubberBand animate__repeat-2">{content}</h1>
    }
    const Effect2 = () => {
        return <h1 class="animate__animated animate__bounceIn animate__repeat-2">{content}</h1>
    }
    const Effect3 = () => {
        return <h1 class="animate__animated animate__tada animate__repeat-2">{content}</h1>
    }

    const EffectType = (props) => {
        switch (props.type) {
            case 1 : return <Effect1/>
            case 2 : return <Effect2/>
            case 3 : return <Effect3/>
        }
    }

    return (
        <>
            {/* <h1 class="animate__animated animate__rubberBand animate__repeat-2">{content}</h1>
            <h1 class="animate__animated animate__bounceIn animate__repeat-2">{content}</h1>
            <h1 class="animate__animated animate__tada animate__repeat-2">{content}</h1> */}
            <EffectType type={1}/>
        </>
    );
}
  
export default Test;
  