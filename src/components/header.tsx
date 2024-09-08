import '../assets/header.css'

function Header() {
    return (
        <div className='flex bg-white py-3 px-4 gap-10 container'>
            <div className='w-24 flex flex-col icon'>
                <img src='https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png' alt='' />
                <span>Tốt & Nhanh</span>
            </div>
            <div className='flex w-full'>
                <div className='input-search'>
                    <img src='https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png' alt='' />
                    <input type='text' placeholder='Freeship đến 30k' />
                    <button>Tìm kiếm</button>
                </div>
            </div>
            <div className='w-full nav-home'>
                <div className='home'>
                    <img src='https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png' alt='' />
                    <span>Trang chủ</span>
                </div>
                <div className='home'>
                    <img src='https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png' alt='' />
                    <span>Tài khoản</span>
                </div>
                <div className='shop'>
                    <img src='https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png' alt='' />
                    <span>0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;