import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline"


const NotFoundPage = () => {

return (
    <Layout pageTitle="Erreur 404" description="Page introuvable.">
        <div className="space-y-4">
            <p className="text-jmv_white">Page introuvable.</p>
            <Link to="/" className="flex items-center gap-2 bg-jmv_white hover:bg-gray-50 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md w-40 p-2">
                <ArrowSmallLeftIcon className="w-10 h-10"/>
                <p>Retour à l'accueil</p>
            </Link>
        </div>
    </Layout>
)
}

export default NotFoundPage