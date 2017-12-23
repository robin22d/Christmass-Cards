import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BackgroundIMG from '../background.jpg'

export default class List extends React.Component {

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    

    render() {


        const divStyle = {
            color: 'White',
            border: '5px solid red',
            float: 'left',
            margin: '10px',
            width: '20%'
        };

        const pdfLayout = {
            backgroundColor: '#f5f5f5',
            width: '110mm',
            minHeight: '190mm',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundImage: `url(${BackgroundIMG})`
        }

        const data =this.props.messages;

        const listItems = data.map((i) => 
        <div>
            <div className="mb5">
                <button onClick={this.printDocument}>Export</button>
            </div>
            <div id="divToPrint" className="mt4" style={pdfLayout}>
                <div style={divStyle} key={i.recipient}>
                    {i.start} <br/>
                    {i.recipient} <br/>
                    {i.content}<br/>
                    {i.signOff}<br/>
                    {i.sender}
                </div>
            </div>
        </div>);

        return (
            <div>
                {listItems}
            </div>
        );
    };
};
