import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {EncryptButton,DecryptButton,EncryptText,DecryptText,EncryptTextAns,DecryptTextAns,Title,EncryptKey,DecryptKey,EncryptSelect,DecryptSelect} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EncryptButton />, document.getElementById('EncryptButton'));
ReactDOM.render(<DecryptButton />, document.getElementById('DecryptButton'));
ReactDOM.render(<EncryptText />, document.getElementById('EncryptText'));
ReactDOM.render(<EncryptTextAns />, document.getElementById('EncryptTextAns'));
ReactDOM.render(<DecryptText />, document.getElementById('DecryptText'));
ReactDOM.render(<DecryptTextAns />, document.getElementById('DecryptTextAns'));
ReactDOM.render(<Title />, document.getElementById('Title'));
ReactDOM.render(<EncryptKey />, document.getElementById('EncryptKey'));
ReactDOM.render(<DecryptKey />, document.getElementById('DecryptKey'));
ReactDOM.render(<EncryptSelect />, document.getElementById('EncryptSelect'));
ReactDOM.render(<DecryptSelect />, document.getElementById('DecryptSelect'));

serviceWorker.unregister();
