const next =require ('fs');
const requestHander =(req,res)=>{
const url=req.url;
const dey=req.method;
if(url==='/'){
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>KGF Brand form</title></head>')
    res.write('<body><form  action="/message" method="POST"><input type="text"name="message"><input type="submit" value="send"></form></body>')
    res.write('</html>')
    return res.end();
    
}  
if(url=='/message' && dey=='POST'){
  const body=[];
  req.on('data',(vagu)=>{
   console.log('Vagunadata:');
   body.push(vagu);
   console.log(vagu);
})
return req.on('end',()=>{
    console.log('end event completed!');
    const parsedBody=Buffer.concat(body).toString();
    const message=parsedBody.split('=');
    next.writeFile('newfile.txt',message[1],(err)=>{
    console.log('fliewrite completed!');
    res.setHeader('Location','/')
    res.statusCode=302;
    return res.end();    
    })
  
    
})
  
}
res.setHeader('Content-type','text/html')
res.write('<html>')
res.write('<head><title>KGF Brand </title></head>')

res.write('<body><h1>Violence Violence i dont like it<h1></body>')
res.write('</html>')
res.end();


};
module.exports = {Hander:requestHander,sometex:'vishal print the value'};