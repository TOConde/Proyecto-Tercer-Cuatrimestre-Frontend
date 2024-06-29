'use client';

import React, { useState } from "react";
import Section, { ActiveSection } from "./Sections";
import './Menu.css';

const Menu: React.FC = () => {

    const [activeSection, setActiveSection] = useState<ActiveSection>('perfil');

    const generalSections = [
        { id: 'perfil', title: 'Perfil' },
        { id: 'preferencias', title: 'Preferencias' },
        { id: 'suscripcion', title: 'Suscripción' },
        { id: 'notificaciones', title: 'Notificaciones' },
    ];

    const cuentaSections = [
        { id: 'email', title: 'Email' },
        { id: 'password', title: 'Password' },
    ];

    return (
        <div className="cuentaMenu">
        <div className="cuentaMenuSections">
            <h3>General</h3>
            {generalSections.map(section => (
                <button
                    key={section.id}
                    className={activeSection === section.id ? 'active' : ''}
                    onClick={() => setActiveSection(section.id as ActiveSection)}
                >
                    {section.title}
                </button>
            ))}
            <h3>Cuenta</h3>
            {cuentaSections.map(section => (
                <button
                    key={section.id}
                    className={activeSection === section.id ? 'active' : ''}
                    onClick={() => setActiveSection(section.id as ActiveSection)}
                >
                    {section.title}
                </button>
            ))}
        </div>
        <div className="cuentaSection">
            <Section activeSection={activeSection} />
        </div>
    </div>
    );
};

export default Menu;