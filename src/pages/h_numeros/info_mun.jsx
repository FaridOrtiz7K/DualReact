import { useState } from 'react';
import './components/style_info_mun.css';
import productosImage from '/images/infografia_municipal.png';
import Banner_P from '../../components/Banner_P'; 

const InfografiasPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const bannerData = {
        titulo: "Infografías Municipales",
        subtitulo: "",
         imagenFondo: productosImage 
      };

    const municipios = [
        { id: 1, nombre: "Acatlán", file: "13001 - Acatlán.pdf" },
        { id: 2, nombre: "Acaxochitlán", file: "13002 - Acaxochitlán.pdf" },
        { id: 3, nombre: "Actopan", file: "13003 - Actopan.pdf" },
        { id: 4, nombre: "Agua Blanca de Iturbide", file: "13004 - Agua Blanca de Iturbide.pdf" },
        { id: 5, nombre: "Ajacuba", file: "13005 - Ajacuba.pdf" },
        { id: 6, nombre: "Alfajayucan", file: "13006 - Alfajayucan.pdf" },
        { id: 7, nombre: "Almoloya", file: "13007 - Almoloya.pdf" },
        { id: 8, nombre: "Apan", file: "13008 - Apan.pdf" },
        { id: 9, nombre: "El Arenal", file: "13009 - El Arenal.pdf" },
        { id: 10, nombre: "Atitalaquia", file: "13010 - Atitalaquia.pdf" },
        { id: 11, nombre: "Atlapexco", file: "13011 - Atlapexco.pdf" },
        { id: 12, nombre: "Atotonilco el Grande", file: "13012 - Atotonilco el Grande.pdf" },
        { id: 13, nombre: "Atotonilco de Tula", file: "13013 - Atotonilco de Tula.pdf" },
        { id: 14, nombre: "Calnali", file: "13014 - Calnali.pdf" },
        { id: 15, nombre: "Cardonal", file: "13015 - Cardonal.pdf" },
        { id: 16, nombre: "Cuautepec de Hinojosa", file: "13016 - Cuautepec de Hinojosa.pdf" },
        { id: 17, nombre: "Chapantongo", file: "13017 - Chapantongo.pdf" },
        { id: 18, nombre: "Chapulhuacán", file: "13018 - Chapulhuacán.pdf" },
        { id: 19, nombre: "Chilcuautla", file: "13019 - Chilcuautla.pdf" },
        { id: 20, nombre: "Eloxochitlán", file: "13020 - Eloxochitlán.pdf" },
        { id: 21, nombre: "Emiliano Zapata", file: "13021 - Emiliano Zapata.pdf" },
        { id: 22, nombre: "Epazoyucan", file: "13022 - Epazoyucan.pdf" },
        { id: 23, nombre: "Francisco I. Madero", file: "13023 - Francisco I. Madero.pdf" },
        { id: 24, nombre: "Huasca de Ocampo", file: "13024 - Huasca de Ocampo.pdf" },
        { id: 25, nombre: "Huautla", file: "13025 - Huautla.pdf" },
        { id: 26, nombre: "Huazalingo", file: "13026 - Huazalingo.pdf" },
        { id: 27, nombre: "Huehuetla", file: "13027 - Huehuetla.pdf" },
        { id: 28, nombre: "Huejutla de Reyes", file: "13028 - Huejutla de Reyes.pdf" },
        { id: 29, nombre: "Huichapan", file: "13029 - Huichapan.pdf" },
        { id: 30, nombre: "Ixmiquilpan", file: "13030 - Ixmiquilpan.pdf" },
        { id: 31, nombre: "Jacala de Ledezma", file: "13031 - Jacala de Ledezma.pdf" },
        { id: 32, nombre: "Jaltocán", file: "13032 - Jaltocán.pdf" },
        { id: 33, nombre: "Juárez Hidalgo", file: "13033 - Juárez Hidalgo.pdf" },
        { id: 34, nombre: "Lolotla", file: "13034 - Lolotla.pdf" },
        { id: 35, nombre: "Metepec", file: "13035 - Metepec.pdf" },
        { id: 36, nombre: "San Agustín Metzquititlán", file: "13036 - San Agustín Metzquititlán.pdf" },
        { id: 37, nombre: "Metztitlán", file: "13037 - Metztitlán.pdf" },
        { id: 38, nombre: "Mineral del Chico", file: "13038 - Mineral del Chico.pdf" },
        { id: 39, nombre: "Mineral del Monte", file: "13039 - Mineral del Monte.pdf" },
        { id: 40, nombre: "La Misión", file: "13040 - La Misión.pdf" },
        { id: 41, nombre: "Mixquiahuala de Juárez", file: "13041 - Mixquiahuala de Juárez.pdf" },
        { id: 42, nombre: "Molango de Escamilla", file: "13042 - Molango de Escamilla.pdf" },
        { id: 43, nombre: "Nicolás Flores", file: "13043 - Nicolás Flores.pdf" },
        { id: 44, nombre: "Nopala de Villagrán", file: "13044 - Nopala de Villagrán.pdf" },
        { id: 45, nombre: "Omitlán de Juárez", file: "13045 - Omitlán de Juárez.pdf" },
        { id: 46, nombre: "San Felipe Orizatlán", file: "13046 - San Felipe Orizatlán.pdf" },
        { id: 47, nombre: "Pacula", file: "13047 - Pacula.pdf" },
        { id: 48, nombre: "Pachuca de Soto", file: "13048 - Pachuca de Soto.pdf" },
        { id: 49, nombre: "Pisaflores", file: "13049 - Pisaflores.pdf" },
        { id: 50, nombre: "Progreso de Obregón", file: "13050 - Progreso de Obregón.pdf" },
        { id: 51, nombre: "Mineral de la Reforma", file: "13051 - Mineral de la Reforma.pdf" },
        { id: 52, nombre: "San Agustín Tlaxiaca", file: "13052 - San Agustín Tlaxiaca.pdf" },
        { id: 53, nombre: "San Bartolo Tutotepec", file: "13053 - San Bartolo Tutotepec.pdf" },
        { id: 54, nombre: "San Salvador", file: "13054 - San Salvador.pdf" },
        { id: 55, nombre: "Santiago de Anaya", file: "13055 - Santiago de Anaya.pdf" },
        { id: 56, nombre: "Santiago Tulantepec de Lugo Guerrero", file: "13056 - Santiago Tulantepec de Lugo Guerrero.pdf" },
        { id: 57, nombre: "Singuilucan", file: "13057 - Singuilucan.pdf" },
        { id: 58, nombre: "Tasquillo", file: "13058 - Tasquillo.pdf" },
        { id: 59, nombre: "Tecozautla", file: "13059 - Tecozautla.pdf" },
        { id: 60, nombre: "Tenango de Doria", file: "13060 - Tenango de Doria.pdf" },
        { id: 61, nombre: "Tepeapulco", file: "13061 - Tepeapulco.pdf" },
        { id: 62, nombre: "Tepehuacán de Guerrero", file: "13062 - Tepehuacán de Guerrero.pdf" },
        { id: 63, nombre: "Tepeji del Río de Ocampo", file: "13063 - Tepeji del Río de Ocampo.pdf" },
        { id: 64, nombre: "Tepetitlán", file: "13064 - Tepetitlán.pdf" },
        { id: 65, nombre: "Tetepango", file: "13065 - Tetepango.pdf" },
        { id: 66, nombre: "Villa de Tezontepec", file: "13066 - Villa de Tezontepec.pdf" },
        { id: 67, nombre: "Tezontepec de Aldama", file: "13067 - Tezontepec de Aldama.pdf" },
        { id: 68, nombre: "Tianguistengo", file: "13068 - Tianguistengo.pdf" },
        { id: 69, nombre: "Tizayuca", file: "13069 - Tizayuca.pdf" },
        { id: 70, nombre: "Tlahuelilpan", file: "13070 - Tlahuelilpan.pdf" },
        { id: 71, nombre: "Tlahuiltepa", file: "13071 - Tlahuiltepa.pdf" },
        { id: 72, nombre: "Tlanalapa", file: "13072 - Tlanalapa.pdf" },
        { id: 73, nombre: "Tlanchinol", file: "13073 - Tlanchinol.pdf" },
        { id: 74, nombre: "Tlaxcoapan", file: "13074 - Tlaxcoapan.pdf" },
        { id: 75, nombre: "Tolcayuca", file: "13075 - Tolcayuca.pdf" },
        { id: 76, nombre: "Tula de Allende", file: "13076 - Tula de Allende.pdf" },
        { id: 77, nombre: "Tulancingo de Bravo", file: "13077 - Tulancingo de Bravo.pdf" },
        { id: 78, nombre: "Xochiatipan", file: "13078 - Xochiatipan.pdf" },
        { id: 79, nombre: "Xochicoatlán", file: "13079 - Xochicoatlán.pdf" },
        { id: 80, nombre: "Yahualica", file: "13080 - Yahualica.pdf" },
        { id: 81, nombre: "Zacualtipán de Ángeles", file: "13081 - Zacualtipán de Ángeles.pdf" },
        { id: 82, nombre: "Zapotlán de Juárez", file: "13082 - Zapotlán de Juárez.pdf" },
        { id: 83, nombre: "Zempoala", file: "13083 - Zempoala.pdf" },
        { id: 84, nombre: "Zimapán", file: "13084 - Zimapán.pdf" }
    ];

    const filteredMunicipios = municipios.filter(municipio =>
        municipio.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>

            <section className="infografias-page">
                <Banner_P {...bannerData} />

                {/* Contenido principal */}
                <div className="container main-content">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar municipio..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                            style={{
                                backgroundColor: '#f8f9fa', // Fondo claro
                                borderColor: '#2c3e50', // Borde azul oscuro
                                color: '#2c3e50', // Texto azul oscuro
                            }}
                        />
                    </div>

                    <div className="municipios-grid">
                        {filteredMunicipios.map((municipio) => (
                            <div key={municipio.id} className="municipio-card">
                                <a
                                    href={`./documents/infografias/municipal/${municipio.file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="municipio-link"
                                >
                                    {municipio.id}. {municipio.nombre}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default InfografiasPage;