const team = [
    {
    name: 'Alice',
    skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
    name: 'Bob',
    skills: ['Java', 'Spring Boot'],
    },
    ];
team.forEach(member=>{
    if(member.name==='Alice'){
        member.skills.push('NodeJs');
    }
});
console.log(team);