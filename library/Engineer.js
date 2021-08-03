class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId() {
        console.log(`Id: ${this.id}`);
    };

    getEmail() {
        console.log(`Email: ${this.email}`)
    };

    getGit() {
        console.log(`Git: ${this.github}`)
    };

    getRole() {
        colsole.log(`Engineer: ${this.Engineer}`)
    };
};

// For the Engineer, we have a similar setup. We have expanded upon the Employee's profile to add a github account as well. The same follows
// for intern and manager. 