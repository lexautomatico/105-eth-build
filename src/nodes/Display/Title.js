import React from 'react';
// import ReactDOM from 'react-dom'
// import Blockies from 'react-blockies';
// import { Input, FilledInput } from '@material-ui/core';
import { Input } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

function Text() {
  this.properties =  {fontSize: 24, fontWeight: "bold", blockieSize: 24, placeholder:"...", title:"Title", value:null,fontFamily:"'Exo 2', sans-serif", color:"#dddddd"}
  this.size = [500, 0];
}

Text.title = "Title";
Text.title_color = "#000000"
//Text.bgcolor ="#000"

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
    if(this.properties.value) global.title = this.properties.value
}

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
            autoFocus
            style={{opacity:0.8,width:"100%",height:36,color:this.properties.color,fontSize:this.properties.fontSize,marginTop:10, fontFamily: this.properties.fontFamily}}
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
