import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/Layout.tsx", [
        index("routes/index.tsx"),
        route("a-propos", "./routes/a-propos.tsx")
    ]),
    
] satisfies RouteConfig;
