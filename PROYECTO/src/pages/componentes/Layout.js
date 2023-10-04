import Head from "next/head"
import Image from "next/image"
import React from "react"

export default props => (
    <>
        <Head>
            <title>Biblioteca</title>
        </Head>

        <header>
            &nbsp;
                <h1 className="titulo-principal">Administración de Biblioteca</h1>
                <div className="icono-perfil">
                    <Image src="/icono_perfil.png" height={32} width={32} alt="icon"></Image>
                </div>

                <div className="menu-toggle">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                </div>
            &nbsp;
        </header>

            <div className="barra-lateral">
                <div className="texto-lateral-izquierdo">
                    <h3>Inicio</h3>
                    <h3>Perfil</h3>
                    <h3>Bibliotecas</h3>
                </div>
            </div>
            <div className="contenido-principal">
                <h2>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
                <p></p>
            </div>

        <main>
            {props.content}
        </main>

    </>
)