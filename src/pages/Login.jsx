function Login() {
    return (
        <div class="h-screen flex justify-center">
            <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
                <form action="">
                    <div class="mb-6">
                        <label for="name" class="block text-gray-800 font-bold">Name:</label>
                        <input type="text" name="name" id="name" placeholder="username" class="w-full bg-slate-100 text-black border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
                    </div>

                    <div>
                        <label for="email" class="block text-gray-800 font-bold">Email:</label>
                        <input type="text" name="email" id="email" placeholder="abc@email.com" class="w-full bg-slate-100 text-black border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

                        <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
                    </div>
                    <butt class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</butt>
                </form>
            </div>
        </div>
    )
}

export default Login