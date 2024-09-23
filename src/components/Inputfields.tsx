import { useState } from "react";

function GetValues(){
    const [surName, setSurName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(surName, lastName, email);
        setSurName("");
        setLastName("");
        setEmail("");
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(event) => {
                setSurName(event.target.value);
            }}
            value={surName}
            id={surName}
            placeholder="Name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" onChange={(event) => {
                setLastName(event.target.value);
            }}
            value={lastName}
            id={lastName}
            placeholder="Last Name"
            />
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(event) => {
                setEmail(event.target.value);
            }}
            value={email}
            id={email}
            placeholder="email"
            />
            <button type="submit">Send Data</button>
        </form>
    </div>
}

export default GetValues;