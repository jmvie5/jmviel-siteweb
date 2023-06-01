import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline"

const SuccessPage = () => {
    return (
        <Layout pageTitle="Merci!">
            <div className="space-y-4">
                <p className="text-jmv_white">Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.</p>
                <Link to="/contact" className="flex items-center gap-2 bg-jmv_white hover:bg-gray-50 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md w-24 p-2">
                    <ArrowSmallLeftIcon className="w-6 h-6"/>
                    <p className="mr-1">Retour</p>
                </Link>
            </div>
        </Layout>
    )
}

export default SuccessPage