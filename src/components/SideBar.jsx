import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import {
    BsFillBarChartFill,
    BsFillGridFill,
    BsFillHandbagFill,
    BsFillPersonLinesFill,
    BsPeopleFill,
    BsPersonDashFill,
    BsPersonPlusFill,
    BsQuestionCircleFill,
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
                    <a id="team-button" ms-hide-element="true" href="team">
                        <SideBarIcon
                            icon={<BsPeopleFill size="28" />}
                            text="Team"
                        />
                    </a>
                    <a
                        id="profile-button"
                        ms-hide-element="true"
                        href="profile"
                    >
                        <SideBarIcon
                            icon={<BsFillPersonLinesFill size="28" />}
                            text="Profile"
                        />
                    </a>
                    <Divider />
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
                <a id="dashboard-button" ms-hide-element="true" href="home">
                    <SideBarIcon
                        icon={<BsFillBarChartFill size="28" />}
                        text="Dashboard"
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
