let umbrella={
    color:"black",
    isOpen:true,
    open:function() {
      if(umbrella.isOpen===true)
      {
        return "The umbrella is already opened";
      }
      else {
        umbrella.isOpen=true;
        return "Julia opens the umbrella";
      }
    },
}
console.log(umbrella);