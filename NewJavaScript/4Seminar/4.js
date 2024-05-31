// const getUsersData = async (id) => {

//     const response = await fetch('https://api.github.com/users/octocat');

//     if (response.status != 200) {
//         throw console.error("Smth is wrong");
//     }
//     else {
//         const user = await response.json();
//         if (user.id === id) console.log(user);
//     }

// }
// getUsersData(583231);




const userData = new FormData();
userData.append("username", "John");
userData.append("age", "30");
userData.append("email", "john@example.com");
const d = async (data) => {
    try {
        const response = await fetch('https://httpbin.org/post', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Успех!");
    } catch (error) {
        console.error("Ошибка:\n", error);
    }
}

d(userData);

const changeStyleDelayed = (id, msec) => {
    const el = document.getElementById(id);

    const styleEl = (el) => {
        el.style.color = 'red';
    }
    setTimeout(styleEl, msec, el);
}
changeStyleDelayed("tet", 2000);