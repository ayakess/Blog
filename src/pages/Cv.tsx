import React from 'react';

const Cv = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Section 1: Titre du CV */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h1 className="text-3xl font-bold text-blue-900 mb-4">Mon CV</h1>
            </section>

            {/* Section 2: Informations personnelles */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                {/* Ajout de la photo */}
               
                <div className="flex justify-center mb-4">
                    <img src="./cv_r_img.jpg" alt="Photo de profil" className="w-32 h-32 rounded-full object-cover" />
              

                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Informations personnelles</h2>
                <ul className="list-disc pl-5">
                    <li>Nom et Prénom : Kessab Aya</li>
                    <li>Âge: 21 ans</li>
                    <li>Téléphone: +212 620764677</li>
                    <li>Email: kessab.aya@student.emi.ac.ma</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/aya-kessab-135919247" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline">Votre profil LinkedIn</a></li>
                </ul>
            </section>

            {/* Section 3: Objectif professionnel */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Objectif professionnel</h2>
                <p>
                    En tant qu'élève ingénieure en génie des réseaux et télécommunications, mon projet professionnel consiste à contribuer au développement et à l'optimisation des infrastructures de communication modernes. Passionnée par les technologies de l'information et de la communication, mon objectif est d'acquérir une expertise approfondie dans la conception, le déploiement et la gestion des réseaux télécoms. Mon ambition est de mettre en œuvre des solutions innovantes pour répondre aux besoins croissants de connectivité, en contribuant ainsi à l'amélioration de la société à l'ère numérique.
                </p>
            </section>

            {/* Section 4: Formation */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Formation</h2>
                <p className="mb-2">2022-Présent</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        Ecole Mohammadia d’ingénieurs (EMI), Rabat
                        <ul className="list-disc pl-5">
                            <li>Deuxième année du cycle d’ingénieurs d’état-génie électrique option réseaux et télécommunications</li>
                        </ul>
                    </li>
                </ul>
                <p className="mb-2">2020-2022</p>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        Classes Préparatoires aux Grands Ecoles d'ingénieurs, Taza
                        <ul className="list-disc pl-5">
                            <li>CPGE Acharif Al Idrissi - Fillière MP</li>
                        </ul>
                    </li>
                </ul>
                <p className="mb-2">2020</p>
                <ul className="list-disc pl-5">
                    <li>
                        Lycée Qualifiant Imam Choutaibi
                        <ul className="list-disc pl-5">
                            <li>Baccalauréat en sciences mathématiques- option A</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Section 5: Expérience professionnelle */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Expérience professionnelle</h2>
                <p className="mb-2">juillet-Août 2023</p>
                <ul className="list-disc pl-5">
                    <li>
                        Stage d’observation chez l’Office National des Chemins de Fer ONCF
                        <ul className="list-disc pl-5">
                            <li>Principes de la signalisation ferroviaire</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* Section 6: Compétences techniques */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Compétences techniques</h2>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Bureautique :</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Microsoft office: Word, Excel, PowerPoint</li>
                </ul>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Informatique</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Langage C</li>
                    <li>Python</li>
                    <li>Matlab</li>
                    <li>SQL / PLSQL</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>VHDL</li>
                </ul>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Logiciels</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Cisco Packet Tracer</li>
                    <li>ISIS Proteus</li>
                    <li>ModelSim</li>
                    <li>Power designer</li>
                    <li>Enterprise Architect</li>
                    <li>Arduino IDE</li>
                </ul>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Connaissances Techniques</h3>
                <ul className="list-disc pl-5">
                    <li>Réseaux informatiques (routage, commutation)</li>
                    <li>Cloud et virtualisation (VMware, PowerShell)</li>
                    <li>Administration des Bases de données (Oracle)</li>
                    <li>Administration systèmes : Linux</li>
                </ul>
            </section>

            {/* Section 7: Compétences linguistiques */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Compétences linguistiques</h2>
                <ul className="list-disc pl-5">
                    <li>Arabe: langue maternelle</li>
                    <li>Français : niveau C1</li>
                    <li>Anglais : niveau B2</li>
                    <li>Turc : débutant</li>
                </ul>
            </section>

            {/* Section 8: Autres informations */}
            <section className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Autres</h2>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Loisirs</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>Lecture</li>
                    <li>Volley ball</li>
                    <li>Échecs</li>
                </ul>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Activités parascolaires</h3>
                <ul className="list-disc pl-5">
                    <li>Club EMICatronic
                        <ul className="list-disc pl-5">
                            <li>Membre cellule projet</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Cv;