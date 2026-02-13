import "./Configuracoes.css";
import {
  FiSettings,
  FiMessageSquare,
  FiClock,
  FiCalendar,
  FiUsers,
  FiShield
} from "react-icons/fi";

function Configuracoes() {
  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Configurações</h1>
          <p>Parâmetros e regras de funcionamento do sistema</p>
        </div>
      </div>

      {/* Blocos */}
      <div className="settings-grid">
        {/* Mensagens */}
        <div className="settings-card">
          <FiMessageSquare size={20} />
          <div>
            <h3>Mensagens padrão</h3>
            <p>
              Texto inicial, confirmação, reagendamento, pós-visita e opt-out.
            </p>
          </div>
        </div>

        {/* Regras operacionais */}
        <div className="settings-card">
          <FiClock size={20} />
          <div>
            <h3>Regras operacionais</h3>
            <p>
              Tentativas de contato, janela de horário, dias úteis e pausas.
            </p>
          </div>
        </div>

        {/* Agenda */}
        <div className="settings-card">
          <FiCalendar size={20} />
          <div>
            <h3>Agenda e limites</h3>
            <p>
              Limite diário de visitas, bloqueio de horários e reagendamentos.
            </p>
          </div>
        </div>

        {/* Usuários */}
        <div className="settings-card">
          <FiUsers size={20} />
          <div>
            <h3>Usuários</h3>
            <p>
              Ativação de vendedores, perfis e permissões de acesso.
            </p>
          </div>
        </div>

        {/* Segurança */}
        <div className="settings-card">
          <FiShield size={20} />
          <div>
            <h3>Segurança e LGPD</h3>
            <p>
              Consentimento, opt-out, logs e histórico de ações críticas.
            </p>
          </div>
        </div>

        {/* Sistema */}
        <div className="settings-card">
          <FiSettings size={20} />
          <div>
            <h3>Sistema</h3>
            <p>
              Integrações, backups automáticos e comportamento geral.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configuracoes;
