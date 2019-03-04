//if undefined put value 'GET'
function makeAjaxRequest(url, method = 'GET') {
    /* if(!method) {
        method = 'GET';
    } */
    return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

function User(id){
    this.id = id;
}

function generateId() {
    return Math.random() * 9999999;
}

//function createAdminUser(user) {
function createAdminUser(user = new User(generateId())){
    user.admin = true;

    return user;
}

createAdminUser(new User(generateId()));