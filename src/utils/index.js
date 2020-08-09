import { Model, createKey } from "@blink-mind/core";
import firebase from'firebase';

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
    

  }
  );
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
    

  }
  );
  return(i);
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
