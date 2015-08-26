multi.service('userData', function($location) {
    var users = [
        {id:1, fName:'Hege', lName:"Pege", sex: "Male", age: "23", title: "President and CEO", officePhone: "781-000-0001", cellPhone: "617-000-0001", email: "Hege@fakemail.com", manager:"", directReports:"", url:"img/Hege.jpg" },
        {id:2, fName:'Kim',  lName:"Pim", sex: "Male", age: "25", title: "CFO", officePhone: "781-000-0002", cellPhone: "617-000-0002", email: "Kim@fakemail.com", manager:"", directReports:"", url:"img/Kim.jpg" },
        {id:3, fName:'Sal',  lName:"Smith", sex: "Male", age: "37", title: "VP of Engineering", officePhone: "781-000-0003", cellPhone: "617-000-0003", email: "Sal@fakemail.com", manager:"", directReports:"", url:"img/Sal.jpg" },
        {id:4, fName:'Jack', lName:"Jones", sex: "Male", age: "20", title: "VP of Sales", officePhone: "781-000-0004", cellPhone: "617-000-0004", email: "Jack@fakemail.com", manager:"", directReports:"", url:"img/Jack.jpg" },
        {id:5, fName:'John', lName:"Doe", sex: "Male", age: "44", title: "Marketing Manager", officePhone: "781-000-0005", cellPhone: "617-000-0005", email: "John@fakemail.com", manager:"", directReports:"", url:"img/John.jpg" },
        {id:6, fName:'Peter',lName:"Pan", sex: "Male", age: "57", title: "Engineering Manager", officePhone: "781-000-0006", cellPhone: "617-000-0006", email: "Peter@fakemail.com", manager:"", directReports:"", url:"img/Peter.jpg" },
        {id:7, fName:'Joyce', lName:"Allan", sex: "Female", age: "33", title: "VP of Marketing", officePhone: "781-000-0007", cellPhone: "617-000-0007", email: "Joyce@fakemail.com", manager:"", directReports:"", url:"img/Joyce.jpg" },
        {id:8, fName:'Lily',  lName:"Pim", sex: "Female", age: "58", title: "Marketing Manager", officePhone: "781-000-0008", cellPhone: "617-000-0008", email: "Lily@fakemail.com", manager:"", directReports:"", url:"img/Lily.jpg" },
        {id:9, fName:'Lucy',  lName:"Elias", sex: "Female", age: "32", title: "Sales Manager", officePhone: "781-000-0009", cellPhone: "617-000-0009", email: "Lucy@fakemail.com", manager:"", directReports:"", url:"img/Lucy.jpg" },
        {id:10, fName:'Mary', lName:"Ellison", sex: "Female", age: "45", title: "Sales Manager", officePhone: "781-000-0010", cellPhone: "617-000-0010", email: "Mary@fakemail.com", manager:"", directReports:"", url:"img/Mary.jpg" },
        {id:11, fName:'Linda', lName:"Oliva", sex: "Female", age: "41", title: "Marketing Manager", officePhone: "781-000-0011", cellPhone: "617-000-0011", email: "Linda@fakemail.com", manager:"", directReports:"", url:"img/Linda.jpg" },
        {id:12, fName:'Amanda',lName:"Wills", sex: "Female", age: "34", title: "Engineering Manager", officePhone: "781-000-0012", cellPhone: "617-000-0012", email: "Amanda@fakemail.com", manager:"", directReports:"", url:"img/Amanda.jpg" }
    ];
    var i;
    var num = users.length;


    this.saveUser = function(user) {
        if (user.id == null){
            user.id = num++;
            users.push(user);
        }
        else {
            for (i in users) {
                if (users[i].id == user.id){
                    users[i] = user;
                }
            }
        }
    };

    this.getUser = function(id) {
        for (i in users) {
            if (users[i].id == id){
                return users[i];
            }
        }
    };

    this.deleteUser = function(id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    };

    this.list = function() {
        return users;
    };

    this.go = function (path) {
        $location.path(path);
    };
});
