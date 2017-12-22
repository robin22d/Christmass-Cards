import React from 'react';

export default class List extends React.Component {


    render() {

        const divStyle = {
            color: 'blue',
            border: '5px solid red',
            float: 'left',
            margin: '10px',
            width: '20%'
        };

        const data =this.props.messages;

        const listItems = data.map((i) => 
        <div style={divStyle} key={i.recipient}>
            {i.start} <br/>
            {i.recipient} <br/>
            {i.content}<br/>
            {i.signOff}<br/>
            {i.sender}
        </div>);

        return (
            <div>
                {listItems}
            </div>
        );
    };
};
