
const express = require('express');
const     app = express();

app.get('/api/test',(req,res)=>{
  res.json({success:'true'});
});

app.listen(process.env.PORT || 5000);