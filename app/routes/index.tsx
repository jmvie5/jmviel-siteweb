import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import mascaradeImgSrc from "~/assets/images/mascarade.webp"

const IndexPage = () => {
    return (
        <>
            <img
                src={mascaradeImgSrc}
                className='absolute object-cover object-center h-dvh w-full'
            />
            <div className="h-dvh z-10 py-4 text-black">
                <div className="flex flex-col ">
                    <h1 className="text-2xl ml-4 ">Jean-Michel Viel</h1>
                    <NavBar dark more />
                </div>
            </div>
            <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>
        </>
    );
};

export default IndexPage;