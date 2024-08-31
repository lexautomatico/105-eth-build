import React from 'react';
// import ReactDOM from 'react-dom'
// import Blockies from 'react-blockies';
// import { Input, FilledInput } from '@material-ui/core';
import { Input } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

function Text() {
  this.properties =  {blockieSize: 24,placeholder:"",title:"Comment",value:null,fontSize:28}
  this.size = [300, 0];
}

Text.title = "Label";
Text.title_color = "#222"

Text.prototype.onConnectionsChange = function(args){
  console.log("onConnectionsChange",args)
}

Text.prototype.getTitle = function() {
  if (this.flags.collapsed && this.properties.value) {
    return this.properties.value
  }
  return "";
};

Text.prototype.handle = function(e) {
    this.properties.value = e.target.value
    this.setOutputData(0,this.properties.value);
    this.onDrawBackground()
}

/*
<TextareaAutosize
  autoFocus
  multiline={true}
  style={{opacity:0.777,width:"100%",height:32,color:"#ffffff",background:"#222",fontSize:this.properties.fontSize,border:"none"}}
  id="outlined-name"
  label="Name"
  placeholder={this.properties.placeholder}
  value={this.properties.value}
  onChange={Text.prototype.handle.bind(this)}
  margin="normal"
  variant="outlined"
/>
 */

Text.prototype.onDrawBackground = function(ctx) {

  if (this.flags.collapsed) {
    /*this.render(
      <div>

      </div>
    )*/
    this.destroy()///SHOULD WE DESTROY THE ELEMENT FROM THE DOM OR
  }else{
    this.render(
      <div>
        <form className={"SOMECONTAINERCLASS"} noValidate autoComplete="off">
          <Input
            style={{width:"100%",height:36,color:"#ffffff",fontSize:this.properties.fontSize}}
            id="outlined-name"
            label="Name"
            placeholder={this.properties.placeholder}
            value={this.properties.value}
            onChange={Text.prototype.handle.bind(this)}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    )
  }


};




export default Text
