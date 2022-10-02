import { LightningElement } from 'lwc';
import jqLib from '@salesforce/resourceUrl/jqueryLib';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
export default class JQueryPractice extends LightningElement {
    renderedCallback(){
        console.log('connected callback');
        /*Promise.all([
           loadScript(this, this.jql)
            loadScript(this,imgs),
        ])*/
             loadScript(this, jqLib)
    .then(()=>{
            console.log('jquery loaded successfully');
        }).catch(error=>{console.log('jquery loading failed:'+error);});
    }
}