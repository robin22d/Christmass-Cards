import React from 'react';

export default class AddItems extends React.Component {

    render(){

        const formStyle = {
            color: 'blue',
            border: '5px solid red',
            float: 'left',
            margin: '10px',
            width: '20%',
            height: '100px'
        };

        const editStyle = {
            display: this.props.showAdd ? 'none' : 'block',
            color: "pink"
        };

        return(
            <div style={editStyle}>
                <form style={formStyle} onSubmit={this.handleCreateStart.bind(this)}>
                    Add Start <br/>
                    <input default='start' ref='start'/>
                    <input type='submit'/>
                </form>

                <form style={formStyle} onSubmit={this.handleCreateContent.bind(this)}>
                    Add Content  <br/>
                    <input default='content' ref="content"/>
                    <input type='submit'/>
                </form>

               <form style={formStyle} onSubmit={this.handleCreateSignOff.bind(this)}>
                    Add signOff  <br/>
                    <input default='signOff' ref="signOff"/>
                    <input type='submit'/>
                </form>

               <form style={formStyle} onSubmit={this.handleCreateFrom.bind(this)}>
                    Add From  <br/>
                    <input default='from' ref="from"/>
                    <input type='submit'/>
                </form>
            </div>
        );
    };

    handleCreateStart(event) {
        event.preventDefault();

        const createStart = this.refs.start;
       
        const start = createStart.value

        this.props.createStart(start);
        this.refs.start.value = '';
    }

    handleCreateContent(event) {
        event.preventDefault();

        const createContent = this.refs.content;
       
        const content = createContent.value;

        this.props.createContent(content);
        this.refs.content.value = '';
    }

    handleCreateSignOff(event) {
        event.preventDefault();

        const createSignOff = this.refs.signOff;
       
        const sign = createSignOff.value;

        this.props.createSignOff(sign);
        this.refs.signOff.value = '';
    }

    handleCreateFrom(event) {
        event.preventDefault();

        const createFrom = this.refs.from;
       
        const from = createFrom.value;

        this.props.createFrom(from);
        this.refs.from.value = '';
    }

};