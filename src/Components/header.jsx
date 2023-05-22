import logo from "../img/logo/logo-a/Frame 3.png";

function Header() {
    return (
        <div className="bg-[##F5F5F5] font-main">
            <div class="container mx-auto mt-4 mb-40 text-2xl font-bold">
                <div class="text-mainText flex items-center justify-between">
                    <img src={logo} alt="" class="w-64" />
                    <div class="flex gap-6">
                        <span id="home" class="text-mainBlue hover:opacity-90 active:opacity-80"><a href="#">Home</a></span>
                        <span id="community" class="hover:opacity-90 active:opacity-80"><a href="#">Community</a></span>
                        <span id="article" class="hover:opacity-90 active:opacity-80"><a href="#">Article</a></span>
                        <span id="consultation" class="hover:opacity-90 active:opacity-80"><a href="#">Consultation</a></span>
                    </div>
                    <div class="flex items-center gap-6">
                        <button id="signIn" type="button" class="px-4 py-2 cursor-pointer hover:opacity-90 active:opacity-80">
                            Sign In
                        </button>
                        <button id="signUp" class="text-white bg-mainBlue px-4 py-2 rounded-md shadow-xl shadow-mainBlue/50 cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;