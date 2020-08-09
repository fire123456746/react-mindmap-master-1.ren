import { Model, createKey } from "@blink-mind/core";
import firebase from'firebase';
import { browserOpenFile ,browserUploadFile} from "@blink-mind/renderer-react/lib/main";
import axios from "axios";
import React,{Component} from 'react'; 
export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

var firebaseConfig = {
  apiKey: "AIzaSyAxMyCxvrkFYPrAhk_wlF6XQN6hq8C_tPg",
  authDomain: "test-94fb7.firebaseapp.com",
  databaseURL: "https://test-94fb7.firebaseio.com",
  projectId: "test-94fb7",
  storageBucket: "test-94fb7.appspot.com",
  messagingSenderId: "135525983448",
  appId: "1:135525983448:web:25585c58ab33992bf4e3ad",
  measurementId: "G-EZK1T2D5B9"
};
firebase.initializeApp(firebaseConfig);  
var db=firebase.database();

export function exportToFirebase (title,data){   
  db.ref('/mindmap/'+title).update(data);
  //db.ref('/mindmap/AI').push(data);
};
export function loadFileNameFromFirebase(){
  var filename_object=[];
  var x;
  
  const fetchData=db.ref('/');
  // fetchData.off();   
  fetchData.on('value',function(snapshot){    
    
    for(x in snapshot.val()){
      filename_object=Object.keys(snapshot.val()[x]);
    }
    
  });
  return(filename_object);
}
export function returnNodeName(map_name){
  var i=[];
  var focusKey;
  db.ref('/mindmap/'+map_name+'/focusKey').on('value',function(snapshot){ focusKey=snapshot.val();});
  db.ref('/mindmap/'+map_name+'/topics/').on('value',function(snapshot2){
    for(var x in snapshot2.val()){
    //   console.log(snapshot.val());
    // console.log(snapshot.val()[x].blocks[0].data);
      if(focusKey===snapshot2.val()[x].key){
        i=snapshot2.val()[x].blocks[0].data;
        console.log(i);
      }      
    }    
  });
  return(i);
}
export function returnNoteContent(map_name){
  var i=[];
  var focusKey;
  db.ref('/mindmap/'+map_name+'/focusKey').on('value',function(snapshot){ focusKey=snapshot.val();});
  db.ref('/mindmap/'+map_name+'/topics/').on('value',function(snapshot2){
    for(var x in snapshot2.val()){
    //   console.log(snapshot.val());
    // console.log(snapshot.val()[x].blocks[0].data);
      if(focusKey===snapshot2.val()[x].key){
        i=snapshot2.val()[x].blocks[1].data;
        console.log(i);
      }
    }
  });
  return(i);
}
export function returnDiagramAsJSON(map_name){
  var x;
  db.ref('/mindmap/'+map_name).on('value',function(mapJSON){
    x=mapJSON.val();    
    });
  return(x);
}

export function generateSimpleModel() {
  const rootKey = createKey();

  return Model.create({
    rootTopicKey: rootKey,
    topics: [
      {
        key: rootKey,
        blocks: [{ type: "CONTENT", data: "Mindustry" }]
      }
    ]
  });
}
// Points to the root reference



var filename ;
var storageRef = firebase.storage().ref('/files/');
export  function UploadFiles() {   
  const state = { 
  
    // Initially, no file is selected 
    selectedFile: null
  }; 
  var file;
  browserUploadFile(".pdf,.txt").then(event => {
    
    // const file = event.target.files[0];
        
    const task =storageRef.put(event);
    HTMLFormControlsCollection.log(event);
  });
  // const onFileUpload = () => { 
  //   // Create an object of formData 
  //   const formData = new FormData(); 
   
  //   // Update the formData object 
  //   formData.append( 
  //     "myFile", 
  //     this.state.selectedFile, 
  //     this.state.selectedFile.name 
  //   ); 
  //   file=formData;
  //  filename=this.state.selectedFile.name;
  //   // Details of the uploaded file 
  //   console.log(this.state.selectedFile); 
   
  //   // Request made to the backend api 
  //   // Send formData object 
  //   axios.post("api/uploadfile", formData); 
  // }; 
 
  // // File content to be displayed after 
  // // file upload is complete 
 
}
