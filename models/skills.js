const skills = [
    {skill: 'HTML', level: 'intermediate'},
    {skill: 'CSS', level: 'intermediate'},
    {skill: 'Javascript', level: 'intermediate'},
    {skill: 'node.js', level: 'beginner'},
  ];
  
  module.exports = {
      getAll,
      getOne,
      create,
      update,
      deleteOne
  };

  function deleteOne(id){
    skills.splice(id, 1);
  }

  function update(id, newLevel) {
    skills[id].level = newLevel
  }

  function create(skill){
    skills.push(skill);
  }

  function getAll() {
      return skills;
  };

  function getOne(id) {
    return skills[id];
  }

