import type { Route } from "./+types/index";

export async function loader({ request, params }: Route.LoaderArgs) {

    const title =  "Jean-Michel Viel"
    const description = "Jean-Michel Viel, musicien, pédagogue et programmeur."
  
  
    return { title, description };
  }
  
  
  export const meta = () => {
  
    return [
      { title: "Jean-Michel Viel" },
      { name: "description", content: "Jean-Michel Viel, musicien, pédagogue et programmeur." },
      { property: "og:title", content:"Jean-Michel Viel" },
      { property: "og:type", content:"website" },
  
    ];
  };

const IndexPage = () => {
    return (
        <>
        </>
    );
};

export default IndexPage;