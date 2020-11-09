import React from 'react';
/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';
import './App.css';


class Title extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"Title"}
    }s
    render(){
        return (
           <div className="Title">CRYPTOFER</div>
        );
    }
}

//eslint-disable-next-line
class EncryptButton extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"EncryptButton"}
    }
    render(){
        return (
             <div className="btn"><button type="button" className="button" onClick={select_encrypt}>Encrypt</button></div>
        );
    }
}

//eslint-disable-next-line
class EncryptSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"EncryptSelect"}
    }
    render(){
        return (
            <div className="select">
             <select id="en">
             <option value="Caeser">Caeser</option>
             <option value="Vigenere">Vigenere</option>
             <option value="Affine">Affine</option>
             </select>
             </div>
        );
    }
}

//eslint-disable-next-line
class DecryptSelect extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"DecryptSelect"}
    }
    render(){
        return (
            <div className="select">
             <select  id="de">
             <option value="Caeser">Caeser</option>
             <option value="Vigenere">Vigenere</option>
             <option value="Affine">Affine</option>
             </select>
             </div>
        );
    }
}

//eslint-disable-next-line
class DecryptButton extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"DecryptButton"}
    }
    render(){
        return (
            <div className="btn"><button type="button" className="button" onClick={select_decrypt}>Decrypt</button></div>
        );
    }
}

class EncryptText extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"EncryptText"}
    }
    render(){
        return (
           <div className="pad"> <textarea className="textbox" placeholder="Text to be Encrypted" id="ent"></textarea></div>
        );
    }
}

class EncryptKey extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"EncryptKey"}
    }
    render(){
        return (
            <div className="pad"> <textarea className="textbox" placeholder="Key for Encryption" id="enk"></textarea></div>
        );
    }
}

class DecryptText extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"DecryptText"}
    }
    render(){
        return (
            <div className="pad"> <textarea className="textbox" placeholder="Text to be Decrypted" id="dnt"></textarea></div>
        );
    }
}

class EncryptTextAns extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"EncryptTextAns"}
    }
    render(){
        return (
            <div className="pad"> <textarea className="textbox" placeholder="Encryption Result" id="eans"></textarea></div>
        );
    }
}

class DecryptKey extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"DecryptKey"}
    }
    render(){
        return (
            <div className="pad"> <textarea className="textbox" placeholder="Key for Decryption" id="dnk"></textarea></div>
        );
    }
}

class DecryptTextAns extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"DecryptTextAns"}
    }
    render(){
        return (
           <div className="pad"><textarea className="textbox" placeholder="Decryption Result" id="dans"></textarea></div>
        );
    }
}

//eslint-disable-next-line
function select_encrypt(){

    var box=document.getElementById("en");
    var choice=box.value;

    switch(choice)
    {
        case "Caeser":
            caeser_encrypt();
            break;
        case "Vigenere":
            vigenere_encrypt();
            break;
        case "Affine":
            affine_encrypt();
            break;
        default:
            break;
    }
}

//eslint-disable-next-line
function select_decrypt(){

    var box=document.getElementById("de");
    var choice=box.value;

    switch(choice)
    {
        case "Caeser":
            caeser_decrypt();
            break;
        case "Vigenere":
            vigenere_decrypt();
            break;
        case "Affine":
            affine_decrypt();
            break;
        default:
            break;
    }
}

//eslint-disable-next-line
function affine_encrypt(){
    var result="";
    var text=document.getElementById("ent").value;
    text=text.toUpperCase();
    var data=document.getElementById("enk").value.split(" ");
    var a=data[0]%26;
    var b=data[1]%26;

    for(var i=0;i<text.length;i++)
    {
        var tmp=String.fromCharCode((((a*(text.charCodeAt(i)-65))+b)%26)+65);
        if(tmp<'A')tmp=" ";
        result+=tmp;
    }

     document.getElementById("eans").value=result;
}

//eslint-disable-next-line
function affine_decrypt(){
    var result="";
    var text=document.getElementById("dnt").value;
    text=text.toUpperCase();
    var data=document.getElementById("dnk").value.split(" ");
    var a=parseInt(data[0]%26);
    var b=parseInt(data[1]%26);

    for(var i=0;i<text.length;i++)
    {
        var k=text.charCodeAt(i)-65-b;
        var ai=0;
        for(var j=0;j<26;j++)
        {
            if(a*j===k)
            {
                ai=j;
                break;
            }
        }
        var tmp=String.fromCharCode(ai+65);
        if(tmp<'A')tmp=" ";
        result+=tmp;
    }

     document.getElementById("dans").value=result;
}

//eslint-disable-next-line
function vigenere_encrypt(){

}

//eslint-disable-next-line
function vigenere_decrypt(){
  
}

//eslint-disable-next-line
function caeser_encrypt(){
    var result="";
    var text=document.getElementById("ent").value;
    text=text.toUpperCase();
    var key=parseInt(document.getElementById("enk").value);

    for(var i=0;i<text.length;i++)
    {
        var tmp=String.fromCharCode(((text.charCodeAt(i)-65+key%26)%26)+65);
        if(tmp<'A')tmp=" ";
        result+=tmp;
    }

     document.getElementById("eans").value=result;
}

//eslint-disable-next-line
function caeser_decrypt(){
    var result="";
    var text=document.getElementById("dnt").value;
    text=text.toUpperCase();
    var key=parseInt(document.getElementById("dnk").value);

    for(var i=0,j=0;i<text.length;i++,j++)
    {
        var tmp=String.fromCharCode(((text.charCodeAt(i)+65-key%26)%26)+65);
        if(tmp<'A')tmp=" ";
        result+=tmp;
    }

     document.getElementById("dans").value=result;
}

export  {EncryptButton,DecryptButton,EncryptText,EncryptTextAns,DecryptTextAns,Title,DecryptKey,EncryptKey,DecryptSelect,EncryptSelect,DecryptText};
