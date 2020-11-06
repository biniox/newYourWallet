import './Bookmark.scss';
import {useState} from 'react';

const Bookmark = ({label, handlerBookmark}) => {


    const mappItem = (active=0) => (label.map((item, i) => (
        <div onClick={handlerClick} className={i!=active ? "BookmarkWrapper__item" : "BookmarkWrapper__item active"} id={i}>{item}</div>
    )));

    const handlerClick = (e) => {
        setMappedItem(mappItem(e.target.id*1));
        handlerBookmark(e.target.id*1);
    }

    const [mappedItem, setMappedItem] = useState(mappItem());

    return (
        <div className="BookmarkWrapper">
            {mappedItem}
        </div>
    )
}

export default Bookmark
