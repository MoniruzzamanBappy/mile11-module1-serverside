const express = require('express');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("First node code practice!")
});

const users = [
{id: 1, name: 'rahim', email: 'rahim@gmail.com', phone: '0178821345678'},
{id: 2, name: 'karim', email: 'pokjnhbvc@gmail.com', phone: '01789876543'},
{id: 3, name: 'jabbar', email: 'zxcvbn@gmail.com', phone: '01783245678888'},
{id: 4, name: 'borkot', email: 'asdfg@gmail.com', phone: '0176754328'},
{id: 5, name: 'sofik', email: 'qwerty@gmail.com', phone: '01788886756432'},
{id: 6, name: 'anas', email: 'bgfvdgrs@gmail.com', phone: '0178888976576554'},
{id: 7, name: 'tulin', email: 'dgdvfbzsdg@gmail.com', phone: '017809876543'},
{id: 8, name: 'joy', email: 'rahim@gmail.com', phone: '01788809852423'},
{id: 9, name: 'junayed', email: 'lkjhg@gmail.com', phone: '0170987653421'},
{id: 10, name: 'jakaria', email: 'mnbvcx@gmail.com', phone: '017234535548'},
{id: 11, name: 'sahed', email: 'oiuyt@gmail.com', phone: '01735345324'},
{id: 12, name: 'saidur', email: 'rahim@gmail.com', phone: '017888824423543'}
]

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(u=>u.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{

        res.send(users)
    }
});


app.get('/user/:id', (req, res)=>{
    const id = req.params.id;
    const user=users.find(u=>u.id==id)
    res.send(user);
});

app.post('/user', (req, res)=>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, ()=>{
    console.log("listening to port", port);
})