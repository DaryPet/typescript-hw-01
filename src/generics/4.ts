type Users = {
name: string;
surname: string;
email: string;
password: string;
}

function createOrUpdateUser(initialValues: Partial<Users>): Users {
    const defaultUser: Users = {
        name: "",
        surname: "",
        email: "",
        password: ""

    }
    return {... defaultUser, ...initialValues}

}

const newUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
console.log(newUser)