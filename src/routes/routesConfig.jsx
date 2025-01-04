import { Contact } from "../shared/contact"
import { Gallery } from "../shared/gallery/gallery"
import { Homepage } from "../shared/homepage"
import { Servicios } from "../shared/services/services"
import { Navigate } from "react-router-dom"
import Layout from "@/layouts/homeLayout"

export const routes = [
  {
    path: "/inicio",
    component: <Layout />,
    routes: [
      {
        path: "",
        component: <Homepage />,
      },
      {
        path: "contacto",
        component: <Contact />,
      },
      {
        path: "galeria",
        component: <Gallery />,
      },
      {
        path: "servicios",
        component: <Servicios />,
      },
    ],
  },
  {
    path: "/",
    component: <Navigate to="/inicio" />,
  },
  {
    path: "*",
    component: <Navigate to="/404" />,
  },
]
