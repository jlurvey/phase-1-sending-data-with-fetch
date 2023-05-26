// Add your code here
submitData = (userName, userEmail) => {
    const formData = {
        name: userName,
        email: userEmail,
    };
    
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
    };
    
    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(function (object) {
        document.body.append(object.id);       
    })
    .catch(function (error) {
        document.body.append(error.message)
    });
}