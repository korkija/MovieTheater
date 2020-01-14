import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Card} from 'antd';
import {Link} from "react-router-dom";

const {Meta} = Card;

export const SmallCard = (props) => {
    const movie = props.movie;
    const {title, poster} = movie;

    const newUrl = "/movie/" + title;
    return (
        <Link to={newUrl}>
            <Card
                hoverable
                onClick={() => props.onClick(props.movie)}
                style={{width: 240}}
                cover={<img style={{width: 238, height: 352, objectFit: "cover"}} alt={title} src={poster}/>}
            >
                <Meta title={title}/>
            </Card>
        </Link>
    )
};
