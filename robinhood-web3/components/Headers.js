import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image';
import logo from '../Assests/logo.png';
const styles = {
    container: 'flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed',
    leftHeader: 'flex flex-1',
    logo: 'object-cover cursor-pointer',
    searchWrapper: 'flex flex-1',
    searchInputContainer:
        'text-white items-center flex  flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg',
    searchIcon: 'text-gray-400 text-3xl mr-3',
    searchInputWrapper: 'text-gray-400 text-lg w-full',
    searchInput: 'bg-transparent outline-none w-full',
    rightHeader: 'flex items-center justify-end text-white gap-8',
    menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300',
}

const Headers = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const formattedAccount = "0xE9...1281";
    return (
        <div className={styles.container}>
            <div className={styles.leftHeader}>
                <Image src={logo} height={100} width={100} className={styles.logo} />
            </div>

            <div className={styles.searchWrapper}>
                <div className={styles.searchInputContainer}>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <div className={styles.searchInputWrapper}>
                        <input placeholder="search..." className={styles.searchInput} />
                    </div>
                </div>
            </div>
            <div className={styles.rightHeader}>
                <div className={styles.menuItem}>Rewards</div>
                <div className={styles.menuItem}>Portfolio</div>
                <div className={styles.menuItem}>Cash</div>
                <div className={styles.menuItem}>Messages</div>
                {isAuthenticated && (
                    <>
                        <div className={styles.menuItem}>{formattedAccount}</div>
                        <div className={styles.menuItem} onClick={() => setIsAuthenticated(false)}>
                            Logout
                        </div>
                    </>
                )}
                {!isAuthenticated && (
                    <div className={styles.menuItem} onClick={() => setIsAuthenticated(true)}>
                        Login
                    </div>
                )}
            </div>
        </div>
    )
}

export default Headers