import {useEffect, useState} from 'react'
import './RadioBox.scss';




const RadioBox = ({arr, click}) => {
        const [mapped, setMapped] = useState();


        const handlerClick = ({target}) => click(target.value*1);

useEffect(() => {
        let map = arr.map((item, indx) => (
           <div className="RadioBoxWrapper__item">
                <input type="radio" id={indx} name="RadioBox" value={indx} defaultChecked={!Boolean(indx)} onChange={handlerClick} />
                <label for={indx}>{item}</label>
           </div>    
        ));

        setMapped(map);
}, [arr])


    return (
            <div className="RadioBoxWrapper">
                    {mapped}
            </div>
    )
}

export default RadioBox;
