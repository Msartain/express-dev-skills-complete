const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill
};

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id)
  res.redirect('/skills');
};

function update(req, res){
  //params.id grabs the obj in the array
  //body.level updates the level of the
  Skill.update(req.params.id, req.body.level)
  res.redirect('/skills')
};

function edit (req, res){
  const skill = Skill.getOne(req.params.id);
  console.log(req.params.id)
  res.render('skills/edit', {
    skill,
    idx: req.params.id
  })
};

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills')
}

function newSkill(req, res){
  res.render('skills/new')
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  };

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
};

