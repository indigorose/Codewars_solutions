function convertHTML(string){

const pairs = {"&":"&amp;", "<":"&lt;", ">": "&gt;", '"': "&quot;", "'":"&apos;"}
   for(let prop in pairs){
      if(string.includes(prop)){
          string = string.replaceAll(prop, pairs[prop]);
}

}
      return string
}