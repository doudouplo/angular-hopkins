var literalCercle = { //equivalent à new Object()
  rayon : 10,
  getSurface : function(){
    console.log(this);
    return Math.PI * Math.pow(this.rayon,2);
  }
};
console.log(literalCercle.getSurface());

//voir self et this
