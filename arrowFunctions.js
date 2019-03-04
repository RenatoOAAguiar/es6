const add = (a, b) => a + b;

//Same of

const adds = function(a,b) {
    return a + b;
};

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team team ${this.teamName}`;
        })
    }
};

//${this.teamName}, is possible because of arrow function, a normal implementation not give that scope access

team.teamSummary();