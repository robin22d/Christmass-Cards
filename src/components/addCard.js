import React from 'react';

export default class AddCards extends React.Component {

    render(){

        const startData =this.props.start;
        const listOfStartItems = startData.map((i) => 
            <option key={i.start} value={i.start}>
                {i.start}
            </option>
        );


        const contentData =this.props.content;
        const listOfContentItems = contentData.map((i) => 
            <option key={i.message} value={i.message}>
                {i.message}
            </option>
        );

        const signOffData =this.props.signOff;
        const listOfSignOffItems = signOffData.map((i) => 
            <option key={i.signOff} value={i.signOff}>
                {i.signOff}
            </option>
        );

        const senderData =this.props.sender;
        const listOfSendersItems = senderData.map((i) => 
            <option key={i.sender} value={i.sender}>
                {i.sender}
            </option>
        );

        return(
            <div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <select ref="start">
                        {listOfStartItems}
                    </select>
                    <input default='to' ref="to"/>
                    <select ref="content">
                        {listOfContentItems}
                    </select> 
                    <select ref="signOff">
                        {listOfSignOffItems}
                    </select> 
                    <select ref="sender">
                        {listOfSendersItems}
                    </select> 
                
                    <input type='submit'/>
                </form>
            </div>
        );
    };

    handleCreate(event) {
        event.preventDefault();

        const createStart = this.refs.start;
        const createTo = this.refs.to;
        const createContent = this.refs.content;
        const createSignOff = this.refs.signOff;
        const createSender = this.refs.sender;
        
        const start = createStart.value
        const to = createTo.value;
        const content = createContent.value;
        const sign = createSignOff.value;
        const from = createSender.value;

        console.log("1: ", to, "2: ", content, "3: ", sign, "4: ", from);

        this.props.createMessage(start, to, content, sign, from);
        this.refs.to.value = '';
    }
};