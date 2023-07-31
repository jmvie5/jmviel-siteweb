import * as React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"



const NotFoundPage = () => {

return (
    <Layout pageTitle="Erreur 404">
        <title>404</title>
        <div className="grid grid-rows-3 justify-between text-jmv_white h-96 w-[67%] min-[398px]:w-[60%] xxs:w-[50%] min-[506px]:w-[42%] lg:w-[50%] ">
            <div className='flex flex-col my-4 '>
                <h1 className='text-2xl ml-4'>Jean-Michel Viel</h1>
                <NavBar/>
            </div>
            
            <div className="ml-4 row-span-2 -mt-4 sm:-mt-0 ">
                <h2 className='text-xl sm:my-4 my-2'>Erreur 404</h2>
                <p className='text-sm md:text-base'>Page Introuvable.</p>
            </div>
        </div>
    </Layout>
)
}

export default NotFoundPage