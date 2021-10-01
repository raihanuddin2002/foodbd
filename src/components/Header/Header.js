import React from 'react';
import "./Header.css";
const Header = (props) => {
    const {handleInput} = props;
    return (
        <div>
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl text-green-600">Food BD</h2>
                    <p>
                        <input onChange={(e) => {handleInput(e)}} style={{width: '500px'}} className="border-2 border-green-500 px-2 py-3 mr-2 rounded-sm focus:outline-none focus:border-green-600" type="text" placeholder="Search Meal" name="" id="" />
                    </p>
                </div>
            </div>

            <div className="bg-light-green py-2">
                <marquee className="text-white text-xl" direction="to left">লেখক সমস্যার অন্য একটি গুরুতপূর্ণ দিকে আমাদের দৃষ্টি ফিরিয়েছেন। তা হলো, মানুষ তার জ্ঞানচর্চার মাধ্যমেই যে মারণাস্ত্র তৈরি করেছে তা ব্যবহৃত হলে যে কোনো সময় পৃথিবী থেকে মানবজাতির বিনাশ ঘটতে পারে । এমন ভয়ানক পরিণাম থেকে মানবজাতিকে রক্ষা করতে হলে শুভবুদ্ধির প্রসার ঘটানো খুবই জরুরি ।).</marquee>
            </div>
        </div>
    );
};

export default Header;