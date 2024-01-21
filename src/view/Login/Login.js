import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a user object with form data
        const user = {
            email,
            password,
            rememberMe,
        };

        // Retrieve existing users from local storage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the array
        existingUsers.push(user);

        // Store the updated array back in local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Reset form fields
        setEmail('');
        setPassword('');
        setRememberMe(false);
    };

    return (
        <>
            <Navbar />
            <div className='container my-5 border p-5 rounded-3 bg-primary-subtle shadow border-primary'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me on this device</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;