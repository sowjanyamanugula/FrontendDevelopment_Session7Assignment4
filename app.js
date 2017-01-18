function outerfunction(innerfunction)
{
   innerfunction();
}
outerfunction(function(){
       console.log("Hello World From Inner Function");
});