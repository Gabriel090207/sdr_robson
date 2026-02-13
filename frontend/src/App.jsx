import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Agendamentos from "./pages/Agendamentos/Agendamentos";
import Pendencias from "./pages/Pendencias/Pendencias";
import Clientes from "./pages/Clientes/Clientes";
import Vendedores from "./pages/Vendedores/Vendedores";
import Relatorios from "./pages/Relatorios/Relatorios";
import Configuracoes from "./pages/Configuracoes/Configuracoes";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/pendencias" element={<Pendencias />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/vendedores" element={<Vendedores />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />

      </Routes>
    </MainLayout>
  );
}

export default App;
