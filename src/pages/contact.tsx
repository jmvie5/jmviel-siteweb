import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const ContactPage = () => {

return (
    <Layout pageTitle="Contact">
        <div id="contact" className="flex flex-col mt-2 items-center">
            <p className="pb-4 select-text text-jmv_white">Contactez-moi en remplissant ce formulaire ou en m'envoyant un courriel à <a className="hover:underline text-jmv_white" href="mailto:info@jeanmichelviel.ca">info@jeanmichelviel.ca</a></p>
            <form className="flex flex-col max-w-3xl" name="contact" action="/succes" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="Objet" value="Demande de renseignement venant de jeanmichelviel.ca" />
                <input type="hidden" name="form-name" value="contact"/>
                <div className="flex flex-col md:grid md:grid-rows-2 gap-2 mb-2">
                    <label className="block row-start-1 row-span-1">
                        <span className="block text-jmv_white">Nom</span>
                        <input type="text" name="Nom" className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light" placeholder="Votre nom complet" required/>
                    </label>
                    <label className="block col-start-2 row-span-1">
                        <span className="block text-jmv_white">Courriel</span>
                        <input type="email" name="Courriel" className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light" placeholder="Votre adresse courriel" required/>
                    </label>                    
                    <label className="block row-start-2">
                        <span className="block text-jmv_white">Service</span>
                        <select name="service" className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light" required>
                            <option disabled selected value=""> -- Sélectionnez -- </option>
                            <option value="Musicien">Musicien</option>
                            <option value="Développeur web">Développeur web</option>
                            <option value="Programmeur">Programmeur</option>
                        </select>
                    </label>
                </div>
                <label className="pb-2">
                    <span className='text-jmv_white'>Message</span>
                    <textarea className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light resize-y" name="message" placeholder="Décrivez vos besoins" required/>
                </label>
                <button type="submit" className="bg-jmv_white hover:bg-gray-50 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md p-2 mt-2 col-start-2 col-span-1 w-32 self-center">Envoyer</button>
            </form>
        </div>

    </Layout>
)
}

export default ContactPage

export const Head = () => (
<Seo title="Contact" description='' />
)