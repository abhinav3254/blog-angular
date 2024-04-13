import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Auth = () => {
    const [loginPage, setLoginPage] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = async () => {
        try {
            const response = await axios.post('/auth/register', { firstName, lastName, email, phone, password, username });
            toast.success(response.data.message);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const login = async () => {
        try {
            const response = await axios.post('/auth/login', { username, password });
            localStorage.setItem('token', response.data.message);
            toast.success('Succesfully logged in');
            setUsername('');
            setPassword('');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center font-Ubuntu'>
            <div className='w-1/2 flex  border border-gray-200 rounded-md overflow-hidden'>
                <div className='w-1/2 flex flex-col item-center justify-between bg-Bluedark text-white p-2'>
                    <p className='text-[30px] my-1'>INFORMATION</p>
                    <p className='text-[15px] my-1'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur explicabo dolorum quis tempore quidem cum. Quidem quasi illum, obcaecati sint incidunt a. Vitae quia itaque quod natus sed repellendus?
                        Rem, illum blanditiis! Sit impedit quos at? Nihil veniam, esse laboriosam quis adipisci ullam maiores alias qui et distinctio soluta ex magnam molestias exercitationem provident eligendi magni iure quo. Officia!
                        Illo deserunt repudiandae eaque dolorum quod quas non explicabo, similique expedita quasi sed, aperiam hic cupiditate itaque magnam dolor.
                    </p>
                    {!loginPage && (
                        <div className='flex items-center justify-center'>
                            <button className='my-2 text-black bg-white w-fit px-3 py-2' onClick={() => { setLoginPage(true) }}>HAVE AN ACCOUNT?</button>
                        </div>
                    )}
                    {loginPage && (
                        <div className='flex items-center justify-center'>
                            <button className='my-2 text-black bg-white w-fit px-3 py-2' onClick={() => { setLoginPage(false) }}>CREATE AN ACCOUNT?</button>
                        </div>
                    )}
                </div>

                {/* signup page code */}
                {!loginPage && (
                    <div className='flex flex-col p-1'>
                        <p className='mb-2 mx-1 text-[30px] text-Bluedark'>REGISTER FORM</p>
                        <div className='flex'>
                            <div className='m-1'>
                                <p className='text-[10px]'>First Name</p>
                                <div className='border border-gray-300'>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                                </div>
                            </div>
                            <div className='m-1'>
                                <p className='text-[10px]'>Last Name</p>
                                <div className='border border-gray-300'>
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='m-1'>
                            <p className='text-[10px]'>Email</p>
                            <div className='border border-gray-300'>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full outline-none border-none p-1' type="text" />
                            </div>
                        </div>
                        <div className='m-1'>
                            <p className='text-[10px]'>Phone</p>
                            <div className='border border-gray-300'>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                            </div>
                        </div>
                        <div className='m-1'>
                            <p className='text-[10px]'>Username</p>
                            <div className='border border-gray-300'>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className='w-full outline-none border-none p-1' type="text" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='m-1'>
                                <p className='text-[10px]'>Password</p>
                                <div className='border border-gray-300'>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                                </div>
                            </div>
                            <div className='m-1'>
                                <p className='text-[10px]'>Confirm Password</p>
                                <div className='border border-gray-300'>
                                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center text-[10px] m-1'>
                            <input className='cursor-pointer' type="checkbox" />
                            <p className='mx-1'>I agree to terms & conditions <sup className='text-red-500'>*</sup> </p>
                        </div>
                        <button className='bg-Bluedark text-white rounded-sm w-fit py-2 px-4 m-1' onClick={register}>Register</button>
                    </div>
                )}

                {/* login page code */}
                {loginPage && (
                    <div className='flex flex-col p-1 w-1/2'>
                        <p className='mb-2 mx-1 text-[30px] text-Bluedark'>LOGIN FORM</p>
                        <div className='m-1'>
                            <p className='text-[10px]'>Username</p>
                            <div className='border border-gray-300'>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className='w-full outline-none border-none p-1' type="text" />
                            </div>
                        </div>
                        <div className='m-1'>
                            <p className='text-[10px]'>Password</p>
                            <div className='border border-gray-300'>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none border-none p-1 w-full' type="text" />
                            </div>
                        </div>
                        <button className='bg-Bluedark text-white rounded-sm w-fit py-2 px-4 m-1' onClick={login}>Login</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Auth