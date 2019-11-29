import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../style/index.css';
import { Card } from 'antd';

const { Meta } = Card;

export const SmallCard = ({title, poster,createCard}) => {

    const [showForm, setShowForm] = useState(false);

    const handleClickAdd = () => {
        console.log(title);
        setShowForm(true);
    };
    const handleSubmit = (data) => {
        setShowForm(false);
        createCard(data);
    };

    return (
        <Card
            hoverable
            onClick={handleClickAdd}
            style={{ width: 240 }}
            cover={<img alt={title} src={poster} />}
        >
            <Meta title={title} />
        </Card>
    )
};

