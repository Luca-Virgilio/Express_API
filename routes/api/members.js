const express = require('express');
const members = require('../../Members');

const router = express.Router();

var valId = 4;

// get All members
router.get('/', (req, res) => {
    res.json(members);
});

//get One member
router.get('/:id', (req, res) => {
    // function some ias boolean
    const found =members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:'no member with id '+ req.params.id});
    }
});

// add new Member
router.post('/', (req, res) => {
    const newMember = {
        id: valId,
        name: req.body.name,
        status: 'attivo'
    }

    if (!newMember.name){
        return res.status(400).json({msg:'please include a name'});
    }

    members.push(newMember);
    res.json(members);
    valId=valId+1;
});

// update Member
router.put('/:id', (req, res) => {

     // function some is a boolean
     const found =members.some(member => member.id === parseInt(req.params.id));

     if(found){
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)){
                member.name = updateMember.name ? updateMember.name : member.name;

                res.json({msg:'member updated'});
            }
        });

     } else {
         res.status(400).json({msg:'no member with id '+ req.params.id});
     }
 
});

// delate member
router.delete('/:id', (req, res) => {

    // function some is a boolean
    const found =members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json({msg:'member delated', members: members.filter(member =>
             member.id !== parseInt(req.params.id))});

    } else {
        res.status(400).json({msg:'no member with id '+ req.params.id});
    }

});

module.exports= router;