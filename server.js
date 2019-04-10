const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
    res.send([
        {
            'id' : 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '김서버',
            'age' : '25',
            'sex' : '남자',
            'job' : '학생'
          },{
            'id' : 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '킹갓버',
            'age' : '21',
            'sex' : '여자',
            'job' :  '프로게이머'
          },{
            'id' : 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '그녀그뇬그녀',
            'age' : '30',
            'sex' :  '여자',
            'job' : '사무직'
          },{
            'id' : 4,
            'image': 'https://placeimg.com/64/64/4',
            'name': '한놈추가',
            'age' : '29',
            'sex' :  '남자',
            'job' : '테스트'
          }
    ]);
});
app.listen(port, ()=>console.log(`동작중인 포트 ${port}`));
