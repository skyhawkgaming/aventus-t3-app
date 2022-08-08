import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GiPodiumWinner, GiSwordsPower } from 'react-icons/gi';

import {
    BsFillBarChartFill,
    BsFillGridFill,
    BsPersonDashFill,
    BsPersonPlusFill,
    BsWrench,
} from 'react-icons/bs';

export default function SideBar() {
    const { data: session } = useSession();
    const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 450) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 450) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    if (session) {
        return (
            <>
                <div className="fixed top-0 left-0 flex flex-col w-16 h-screen m-0 text-white shadow-lg bg-secondary-dark-bg ">
                    <a id="home-button" ms-hide-element="true" href="home">
                        <SideBarIcon
                            icon={<BsFillGridFill size="28" />}
                            text="Home"
                        />
                    </a>
                    <Divider />
                    <a
                        id="dashboard-button"
                        ms-hide-element="true"
                        href="dashboard"
                    >
                        <SideBarIcon
                            icon={<BsFillBarChartFill size="28" />}
                            text="Dashboard"
                        />
                    </a>
                    <a id="fame-button" ms-hide-element="true" href="fame">
                        <SideBarIcon
                            icon={<GiPodiumWinner size="28" />}
                            text="Hall of Fame"
                        />
                    </a>
                    <a id="comps-button" ms-hide-element="true" href="comps">
                        <SideBarIcon
                            icon={<GiSwordsPower size="28" />}
                            text="Competitions"
                        />
                    </a>
                    <a
                        id="profile-button"
                        ms-hide-element="true"
                        href="profile"
                    >
                        <SideBarIcon
                            icon={
                                <Image
                                    className="rounded-full"
                                    width="36"
                                    height="36"
                                    alt="Profile Picture"
                                    src={session.user?.image || ''}
                                />
                            }
                            text="Edit Profile"
                        />
                    </a>
                    <Divider />
                    <a id="comps-button" ms-hide-element="true" href="admin">
                        <SideBarIcon
                            icon={<BsWrench size="28" />}
                            text="Admin"
                        />
                    </a>
                    <button onClick={() => signOut()}>
                        <SideBarIcon
                            icon={<BsPersonDashFill size="28" />}
                            text="Sign out"
                        />
                    </button>
                </div>
            </>
        );
    }
    // try { signIn('google') }
    // catch (error) {
    //   console.log(error)
    // }
    return (
        <>
            <div className="fixed top-0 left-0 flex flex-col w-16 h-screen m-0 text-white shadow-lg bg-primary bg-secondary-dark-bg">
                <a id="home-button" ms-hide-element="true" href="home">
                    <SideBarIcon
                        icon={<BsFillGridFill size="28" />}
                        text="Home"
                    />
                </a>
                <Divider />
                <a
                    id="dashboard-button"
                    ms-hide-element="true"
                    href="dashboard"
                >
                    <SideBarIcon
                        icon={<BsFillBarChartFill size="28" />}
                        text="Dashboard"
                    />
                </a>
                <a id="fame-button" ms-hide-element="true" href="fame">
                    <SideBarIcon
                        icon={<GiPodiumWinner size="28" />}
                        text="Hall of Fame"
                    />
                </a>
                {/* <a id='store-button' ms-hide-element='true' href='store'>
          <SideBarIcon icon={<BsFillHandbagFill size='28' />} text='Store' />
        </a> */}
                {isDesktop ? (
                    <>
                        <Divider />
                        <button onClick={() => signIn('google')}>
                            <SideBarIcon
                                icon={<BsPersonPlusFill size="28" />}
                                text="Sign in"
                            />
                        </button>
                    </>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;
