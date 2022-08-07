import GetCards from '../../components/GetCards';
import SideBar from '../../components/SideBar';
import Tables from '../../components/Tables';
import SignIn from '../../components/SignIn';
const Home = () => {
    // const { data: session } = useSession()

    return (
        <div className="bg-slate-900">
            <div className="relative flex bg-main-dark-bg">
                <SideBar />
                <div
                    className="fixed right-4 bottom-4"
                    style={{ zIndex: '1000' }}
                ></div>
                <div className="w-full min-h-screen pl-20 bg-main-bg">
                    <div>
                        <div className="text-center">
                            <GetCards />
                            <Tables />
                            <SignIn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;