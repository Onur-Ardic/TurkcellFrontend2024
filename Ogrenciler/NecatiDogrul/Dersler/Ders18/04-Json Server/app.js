


Request.get("http://localhost:3000/users")
    .then(data => {
        data.forEach(user=>{
            //card oluşturma
            const card = createElement("div", "card", "");

            //card body oluşturma
            const cardBody = createElement("div", "card-body", "");

            //card title oluşturma
            const title = createElement("h5", "card-title", user.name);

            //card text oluşturma
            const department = createElement("p", "card-text", user.department);

            //card text olusturma
            const salary = createElement("p", "card-text", user.salary);


            cardBody.appendChild(title);
            cardBody.appendChild(department);
            cardBody.appendChild(salary);
            card.appendChild(cardBody);
            document.querySelector("#cards").appendChild(card);
        })
    })
    .catch((err)=>{
        console.log(err);
    })


function createElement(tagName, className, textContent) {
                const element = document.createElement(tagName);
                element.className = className;
                element.textContent = textContent;
                return element;
            }