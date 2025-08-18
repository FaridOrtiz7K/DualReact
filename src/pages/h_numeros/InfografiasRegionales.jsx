import React from 'react';
import './InfografiasRegionales.css';
import Banner_P from '../../components/Banner_P'; 
import infografiaRegional from '/images/infografia_regional.png'; 

const InfografiasRegionales = () => {
  return (
    <>
      
      <section>
        
        <Banner_P 
        titulo="Infografías Regionales"
        subtitulo=''
        imagenFondo={infografiaRegional}
      />

        <div className="container">
          <div className="region-container">
            {/* Región 1 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/1.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región I: Tula
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13076 - Tula de Allende.pdf" target="_blank">Tula de Allende</a></li>
                <li><a href="./documents/infografias/municipal/13064 - Tepetitlán.pdf" target="_blank">Tepetitlán</a></li>
                <li><a href="./documents/infografias/municipal/13067 - Tezontepec de Aldama.pdf" target="_blank">Tezontepec de Aldama</a></li>
                <li><a href="./documents/infografias/municipal/13070 - Tlahuelilpan.pdf" target="_blank">Tlahuelilpan</a></li>
                <li><a href="./documents/infografias/municipal/13065 - Tetepango.pdf" target="_blank">Tetepango</a></li>
                <li><a href="./documents/infografias/municipal/13005 - Ajacuba.pdf" target="_blank">Ajacuba</a></li>
                <li><a href="./documents/infografias/municipal/13010 - Atitalaquia.pdf" target="_blank">Atitalaquia</a></li>
                <li><a href="./documents/infografias/municipal/13074 - Tlaxcoapan.pdf" target="_blank">Tlaxcoapan</a></li>
                <li><a href="./documents/infografias/municipal/13013 - Atotonilco de Tula.pdf" target="_blank">Atotonilco de Tula</a></li>
                <li><a href="./documents/infografias/municipal/13063 - Tepeji del Río de Ocampo.pdf" target="_blank">Tepeji del Río de Ocampo</a></li>
              </ul>
            </section>

            {/* Región 2 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/2.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región II: Tulancingo
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13077 - Tulancingo de Bravo.pdf" target="_blank">Tulancingo de Bravo</a></li>
                <li><a href="./documents/infografias/municipal/13004 - Agua Blanca de Iturbide.pdf" target="_blank">Agua Blanca de Iturbide</a></li>
                <li><a href="./documents/infografias/municipal/13060 - Tenango de Doria.pdf" target="_blank">Tenango de Doria</a></li>
                <li><a href="./documents/infografias/municipal/13035 - Metepec.pdf" target="_blank">Metepec</a></li>
                <li><a href="./documents/infografias/municipal/13001 - Acatlán.pdf" target="_blank">Acatlán</a></li>
                <li><a href="./documents/infografias/municipal/13002 - Acaxochitlán.pdf" target="_blank">Acaxochitlán</a></li>
                <li><a href="./documents/infografias/municipal/13056 - Santiago Tulantepec de Lugo Guerrero.pdf" target="_blank">Santiago Tulantepec de Lugo Guerrero</a></li>
                <li><a href="./documents/infografias/municipal/13016 - Cuautepec de Hinojosa.pdf" target="_blank">Cuautepec de Hinojosa</a></li>
                <li><a href="./documents/infografias/municipal/13057 - Singuilucan.pdf" target="_blank">Singuilucan</a></li>
                <li><a href="./documents/infografias/municipal/13053 - San Bartolo Tutotepec.pdf" target="_blank">San Bartolo Tutotepec</a></li>
                <li><a href="./documents/infografias/municipal/13027 - Huehuetla.pdf" target="_blank">Huehuetla</a></li>
              </ul>
            </section>

            {/* Región 3 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/3.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región III: Pachuca
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13048 - Pachuca de Soto.pdf" target="_blank">Pachuca de Soto</a></li>
                <li><a href="./documents/infografias/municipal/13052 - San Agustín Tlaxiaca.pdf" target="_blank">San Agustín Tlaxiaca</a></li>
                <li><a href="./documents/infografias/municipal/13082 - Zapotlán de Juárez.pdf" target="_blank">Zapotlán de Juárez</a></li>
              </ul>
            </section>

            {/* Región 4 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/4.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región IV: Huejutla
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13028 - Huejutla de Reyes.pdf" target="_blank">Huejutla de Reyes</a></li>
                <li><a href="./documents/infografias/municipal/13046 - San Felipe Orizatlán.pdf" target="_blank">San Felipe Orizatlán</a></li>
                <li><a href="./documents/infografias/municipal/13032 - Jaltocán.pdf" target="_blank">Jaltocán</a></li>
                <li><a href="./documents/infografias/municipal/13073 - Tlanchinol.pdf" target="_blank">Tlanchinol</a></li>
                <li><a href="./documents/infografias/municipal/13026 - Huazalingo.pdf" target="_blank">Huazalingo</a></li>
                <li><a href="./documents/infografias/municipal/13011 - Atlapexco.pdf" target="_blank">Atlapexco</a></li>
                <li><a href="./documents/infografias/municipal/13025 - Huautla.pdf" target="_blank">Huautla</a></li>
                <li><a href="./documents/infografias/municipal/13034 - Lolotla.pdf" target="_blank">Lolotla</a></li>
                <li><a href="./documents/infografias/municipal/13014 - Calnali.pdf" target="_blank">Calnali</a></li>
                <li><a href="./documents/infografias/municipal/13080 - Yahualica.pdf" target="_blank">Yahualica</a></li>
                <li><a href="./documents/infografias/municipal/13078 - Xochiatipan.pdf" target="_blank">Xochiatipan</a></li>
              </ul>
            </section>

            {/* Región 5 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/5.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región V: Mineral de la Reforma
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13051 - Mineral de la Reforma.pdf" target="_blank">Mineral de la Reforma</a></li>
                <li><a href="./documents/infografias/municipal/13024 - Huasca de Ocampo.pdf" target="_blank">Huasca de Ocampo</a></li>
                <li><a href="./documents/infografias/municipal/13045 - Omitlán de Juárez.pdf" target="_blank">Omitlán de Juárez</a></li>
                <li><a href="./documents/infografias/municipal/13039 - Mineral del Monte.pdf" target="_blank">Mineral del Monte</a></li>
                <li><a href="./documents/infografias/municipal/13022 - Epazoyucan.pdf" target="_blank">Epazoyucan</a></li>
                <li><a href="./documents/infografias/municipal/13038 - Mineral del Chico.pdf" target="_blank">Mineral del Chico</a></li>
              </ul>
            </section>

            {/* Región 6 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/6.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región VI: Tizayuca
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13069 - Tizayuca.pdf" target="_blank">Tizayuca</a></li>
                <li><a href="./documents/infografias/municipal/13075 - Tolcayuca.pdf" target="_blank">Tolcayuca</a></li>
                <li><a href="./documents/infografias/municipal/13066 - Villa de Tezontepec.pdf" target="_blank">Villa de Tezontepec</a></li>
                <li><a href="./documents/infografias/municipal/13083 - Zempoala.pdf" target="_blank">Zempoala</a></li>
              </ul>
            </section>

            {/* Región 7 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/7.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región VII: Actopan
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13003 - Actopan.pdf" target="_blank">Actopan</a></li>
                <li><a href="./documents/infografias/municipal/13055 - Santiago de Anaya.pdf" target="_blank">Santiago de Anaya</a></li>
                <li><a href="./documents/infografias/municipal/13050 - Progreso de Obregón.pdf" target="_blank">Progreso de Obregón</a></li>
                <li><a href="./documents/infografias/municipal/13054 - San Salvador.pdf" target="_blank">San Salvador</a></li>
                <li><a href="./documents/infografias/municipal/13023 - Francisco I. Madero.pdf" target="_blank">Francisco I. Madero</a></li>
                <li><a href="./documents/infografias/municipal/13009 - El Arenal.pdf" target="_blank">El Arenal</a></li>
                <li><a href="./documents/infografias/municipal/13041 - Mixquiahuala de Juárez.pdf" target="_blank">Mixquiahuala de Juárez</a></li>
              </ul>
            </section>

            {/* Región 8 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/8.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región VIII: Ixmiquilpan
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13030 - Ixmiquilpan.pdf" target="_blank">Ixmiquilpan</a></li>
                <li><a href="./documents/infografias/municipal/13006 - Alfajayucan.pdf" target="_blank">Alfajayucan</a></li>
                <li><a href="./documents/infografias/municipal/13084 - Zimapán.pdf" target="_blank">Zimapán</a></li>
                <li><a href="./documents/infografias/municipal/13043 - Nicolás Flores.pdf" target="_blank">Nicolás Flores</a></li>
                <li><a href="./documents/infografias/municipal/13015 - Cardonal.pdf" target="_blank">Cardonal</a></li>
                <li><a href="./documents/infografias/municipal/13058 - Tasquillo.pdf" target="_blank">Tasquillo</a></li>
                <li><a href="./documents/infografias/municipal/13019 - Chilcuautla.pdf" target="_blank">Chilcuautla</a></li>
              </ul>
            </section>

            {/* Región 9 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/9.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región IX: Zacualtipán
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13081 - Zacualtipán de Ángeles.pdf" target="_blank">Zacualtipán de Ángeles</a></li>
                <li><a href="./documents/infografias/municipal/13062 - Tepehuacán de Guerrero.pdf" target="_blank">Tepehuacán de Guerrero</a></li>
                <li><a href="./documents/infografias/municipal/13071 - Tlahuiltepa.pdf" target="_blank">Tlahuiltepa</a></li>
                <li><a href="./documents/infografias/municipal/13042 - Molango de Escamilla.pdf" target="_blank">Molango de Escamilla</a></li>
                <li><a href="./documents/infografias/municipal/13033 - Juárez Hidalgo.pdf" target="_blank">Juárez Hidalgo</a></li>
                <li><a href="./documents/infografias/municipal/13079 - Xochicoatlán.pdf" target="_blank">Xochicoatlán</a></li>
                <li><a href="./documents/infografias/municipal/13020 - Eloxochitlán.pdf" target="_blank">Eloxochitlán</a></li>
                <li><a href="./documents/infografias/municipal/13037 - Metztitlán.pdf" target="_blank">Metztitlán</a></li>
                <li><a href="./documents/infografias/municipal/13012 - Atotonilco el Grande.pdf" target="_blank">Atotonilco el Grande</a></li>
                <li><a href="./documents/infografias/municipal/13036 - San Agustín Metzquititlán.pdf" target="_blank">San Agustín Metzquititlán</a></li>
                <li><a href="./documents/infografias/municipal/13068 - Tianguistengo.pdf" target="_blank">Tianguistengo</a></li>
              </ul>
            </section>

            {/* Región 10 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/10.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región X: Apan
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13008 - Apan.pdf" target="_blank">Apan</a></li>
                <li><a href="./documents/infografias/municipal/13072 - Tlanalapa.pdf" target="_blank">Tlanalapa</a></li>
                <li><a href="./documents/infografias/municipal/13061 - Tepeapulco.pdf" target="_blank">Tepeapulco</a></li>
                <li><a href="./documents/infografias/municipal/13007 - Almoloya.pdf" target="_blank">Almoloya</a></li>
                <li><a href="./documents/infografias/municipal/13021 - Emiliano Zapata.pdf" target="_blank">Emiliano Zapata</a></li>
              </ul>
            </section>

            {/* Región 11 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/11.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región XI: Huichapan
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13029 - Huichapan.pdf" target="_blank">Huichapan</a></li>
                <li><a href="./documents/infografias/municipal/13059 - Tecozautla.pdf" target="_blank">Tecozautla</a></li>
                <li><a href="./documents/infografias/municipal/13044 - Nopala de Villagrán.pdf" target="_blank">Nopala de Villagrán</a></li>
                <li><a href="./documents/infografias/municipal/13017 - Chapantongo.pdf" target="_blank">Chapantongo</a></li>
              </ul>
            </section>

            {/* Región 12 */}
            <section className="region">
              <li>
                <a href="./documents/infografias/region/12.pdf" target="_blank" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Región XII: Jacala
                </a>
              </li>
              <ul>
                <li><a href="./documents/infografias/municipal/13031 - Jacala de Ledezma.pdf" target="_blank">31. Jacala de Ledezma</a></li>
                <li><a href="./documents/infografias/municipal/13047 - Pacula.pdf" target="_blank">47. Pacula</a></li>
                <li><a href="./documents/infografias/municipal/13040 - La Misión.pdf" target="_blank">40. La Misión</a></li>
                <li><a href="./documents/infografias/municipal/13018 - Chapulhuacán.pdf" target="_blank">18. Chapulhuacán</a></li>
                <li><a href="./documents/infografias/municipal/13049 - Pisaflores.pdf" target="_blank">49. Pisaflores</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfografiasRegionales;