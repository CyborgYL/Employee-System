multi.factory('userData', ['$scope','$location', function userDataFactory($scope, $location) {
    var users = [
        {id:0, fName:'Hege', lName:"Pege", sex: "Male", age: "63", title: "President and CEO", url:"img/Hege.jpg",
            officePhone: "781-000-0000", cellPhone: "617-000-0000", email: "Hege@fakemail.com",
            manager:{id:0, fName:'I am the BOSS!', lName: 'HAHAHA!'}, directReports:[{id:1}] },

        {id:1, fName:'Kim',  lName:"Pim", sex: "Male", age: "65", title: "CFO",url:"img/Kim.jpg",
            officePhone: "781-000-0001", cellPhone: "617-000-0001", email: "Kim@fakemail.com",
            manager:{id:0, fName:'Hege', lName: 'Pege'}, directReports:[{id:2}, {id:3}, {id:4}]
        },

        {id:2, fName:'Sal',  lName:"Smith", sex: "Male", age: "57", title: "VP of Engineering", url:"img/Sal.jpg",
            officePhone: "781-000-0002", cellPhone: "617-000-0002", email: "Sal@fakemail.com",
            manager:{id:1, fName:'Kim', lName: 'Pim'}, directReports:[{id:6}, {id:11}] },

        {id:3, fName:'Jack', lName:"Jones", sex: "Male", age: "60", title: "VP of Sales", url:"img/Jack.jpg",
            officePhone: "781-000-0003", cellPhone: "617-000-0003", email: "Jack@fakemail.com",
            manager:{id:1, fName:'Kim', lName: 'Pim'}, directReports:[{id:8}, {id:9}] },

        {id:4, fName:'Joyce', lName:"Allan", sex: "Female", age: "66", title: "VP of Marketing", url:"img/Joyce.jpg",
            officePhone: "781-000-0004", cellPhone: "617-000-0004", email: "Joyce@fakemail.com",
            manager:{id:1, fName:'Kim', lName: 'Pim'}, directReports:[{id:5}, {id:7}, {id:10}] },

        {id:5, fName:'John', lName:"Doe", sex: "Male", age: "40", title: "Marketing Manager", url:"img/John.jpg",
            officePhone: "781-000-0005", cellPhone: "617-000-0005", email: "John@fakemail.com",
            manager:{id:4, fName:'Joyce', lName: 'Allan'}, directReports:"" },

        {id:6, fName:'Peter',lName:"Pan", sex: "Male", age: "37", title: "Engineering Manager", url:"img/Peter.jpg",
            officePhone: "781-000-0006", cellPhone: "617-000-0006", email: "Peter@fakemail.com",
            manager:{id:2, fName:'Sal', lName: 'Smith'}, directReports:"" },

        {id:7, fName:'Lily',  lName:"Pim", sex: "Female", age: "38", title: "Marketing Manager", url:"img/Lily.jpg",
            officePhone: "781-000-0007", cellPhone: "617-000-0007", email: "Lily@fakemail.com",
            manager:{id:4, fName:'Joyce', lName: 'Allan'}, directReports:"" },

        {id:8, fName:'Lucy',  lName:"Elias", sex: "Female", age: "32", title: "Sales Manager", url:"img/Lucy.jpg",
            officePhone: "781-000-0008", cellPhone: "617-000-0008", email: "Lucy@fakemail.com",
            manager:{id:3, fName:'Jack', lName: 'Jones'}, directReports:"" },

        {id:9, fName:'Mary', lName:"Ellison", sex: "Female", age: "29", title: "Sales Manager", url:"img/Mary.jpg",
            officePhone: "781-000-0009", cellPhone: "617-000-0009", email: "Mary@fakemail.com",
            manager:{id:3, fName:'Jack', lName: 'Jones'}, directReports:"" },

        {id:10, fName:'Linda', lName:"Oliva", sex: "Female", age: "33", title: "Marketing Manager", url:"img/Linda.jpg",
            officePhone: "781-000-0010", cellPhone: "617-000-0010", email: "Linda@fakemail.com",
            manager:{id:4, fName:'Joyce', lName: 'Allan'}, directReports:"" },

        {id:11, fName:'Amanda',lName:"Wills", sex: "Female", age: "34", title: "Engineering Manager", url:"img/Amanda.jpg",
            officePhone: "781-000-0011", cellPhone: "617-000-0011", email: "Amanda@fakemail.com",
            manager:{id:2, fName:'Sal', lName: 'Smith'}, directReports:"" }
    ];
    var i;
    var j;
    var num = users[0].id;

    for (j=1; j<users.length; j++) {
        num = Math.max(users[j].id, num);
    }

	return { 
	saveUser : function(user) {
        if (user.id == null){
            num++;
            user.id = num;
            users.push(user);
        }
        else {
            for (i in users) {
                if (users[i].id == user.id){
                    users[i] = user;
                }
            }
        }
    },

    getUser : function(id) {
        for (i in users) {
            if (users[i].id == id){
                return users[i];
            }
        }
    },

   deleteUser : function(id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    },


    list_users: function() {
        return users;
    },

    go : function (path) {
        $location.path(path);
		console.log(path);
    }};
   
}]);
