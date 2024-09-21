import * as React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { navigate, graphql, HeadProps } from 'gatsby';
import Seo from "../components/Seo";
import { FormattedMessage } from "react-intl";
import { DataProps } from "../types";

const ContactPage = () => {
  let [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
    navigate("/");
  }

  function openModal() {
    setModalOpen(true);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => openModal())
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <div className="bg-[url(../images/contact.webp)] bg-cover h-96">
        <div className="grid grid-rows-3 justify-between h-96 ">
          <div className="flex flex-col my-4 ">
            <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
            <NavBar dark more />
          </div>

          <div className="ml-4 row-span-2 min-[480px]:w-[360px] lg:w-[450px]">
            <h2 className="text-xl my-4">Contact</h2>
            <p className="my-4 mr-4">
              <FormattedMessage id="contact-desc" />{" "}
              <a
                className="hover:underline "
                href="mailto:info@jeanmichelviel.ca"
              >
                info@jeanmichelviel.ca
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>

      <div id="contact" className="flex flex-col mt-2 items-center">
        <form
          className="flex flex-col max-w-3xl rounded-xl bg-gradient-to-r from-jmv_medium to-jmv_lessDark p-4"
          name="contact"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="Objet"
            value="Demande de renseignement venant de jeanmichelviel.ca"
          />
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col xs:grid xs:grid-rows-2 gap-2 mb-2">
            <label className="block row-start-1 row-span-1">
              <span className="block text-jmv_white"><FormattedMessage id="name" /></span>
              <input
                type="text"
                name="Nom"
                className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light"
                placeholder="Votre nom complet"
                required
              />
            </label>
            <label className="block col-start-2 row-span-1">
              <span className="block text-jmv_white"><FormattedMessage id="email" /></span>
              <input
                type="email"
                name="Courriel"
                className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light"
                placeholder="Votre adresse courriel"
                required
              />
            </label>
            <label className="block row-start-2">
              <span className="block text-jmv_white"><FormattedMessage id="need" /></span>
              <select
                name="service"
                className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light"
                required
              >
                <option disabled selected value="">
                  {" "}
                  <FormattedMessage id="select" />{" "}
                </option>
                <option value="Musicien"><FormattedMessage id="musician" /></option>
                <option value="Professeur"><FormattedMessage id="teacher" /></option>
                <option value="Développeur web"><FormattedMessage id="web-developper" /></option>
                <option value="Programmeur"><FormattedMessage id="programmer" /></option>
              </select>
            </label>
          </div>
          <label className="pb-2">
            <span className="text-jmv_white"><FormattedMessage id="message" /></span>
            <textarea
              className="mt-1 block w-full px-3 py-2 bg-jmv_white border border-jmv_light rounded-md text-sm shadow-sm placeholder-jmv_light focus:outline-none focus:border-jmv_light focus:ring-1 focus:ring-jmv_light resize-y"
              name="message"
              placeholder="Décrivez vos besoins"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-jmv_white hover:bg-gray-50 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md p-2 mt-2 col-start-2 col-span-1 w-32 self-center"
          >
            <FormattedMessage id="send" />
          </button>
        </form>
      </div>

      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-jmv_white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-jmv_dark"
                  >
                    <FormattedMessage id="modal-title" />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-jmv_lessDark">
                    <FormattedMessage id="modal-desc" />
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-jmv_lessDark hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:jmv_light focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <FormattedMessage id="modal-close" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default ContactPage;

export function Head(props: HeadProps<DataProps>) {
  return <Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message} />;
}

export const query = graphql`
  query ContactPage($locale: String) {
      pageTitle: translation(locale: { eq: $locale }, key: { eq: "Contact" }) {
          message
      }
      pageDescription: translation(locale: { eq: $locale }, key: { eq: "contact-desc-head" }) {
          message
      }
  }
`;
