import Cadastro from "@/components/cadastro/Cadastro";
import Home from "@/components/home/home";

export const routes = [
    { path: '/', component: Home, titulo: 'Home'},
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'},
];