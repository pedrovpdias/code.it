import React from 'react';
import './index.css';

function Techs(){
    return (
        <section id="techs">
            <header>
                <h1>Tecnologias</h1>
            </header>
            <article>
                <div className="content">
                    <div className="techs-list">
                        <div className="techs-item">
                            <img src="/img/react.png" alt="ReactJS" title="ReactJS"/>
                        </div>
                        <div className="techs-item">
                            <img src="/img/react-native.png" alt="React Native" title="React Native"/>
                        </div>
                        <div className="techs-item">
                            <img src="/img/node.png" alt="Node.js" title="Node.js"/>                
                        </div>
                        <div className="techs-item">
                            <img src="/img/mongodb.png" alt="MongoDB" title="MongoDB"/>                
                        </div>
                        <div className="techs-item">
                            <img src="/img/codeigniter.png" alt="Codeigniter PHP" title="Codeigniter PHP"/>
                        </div>
                        <div className="techs-item">
                            <img src="/img/mysql.png" alt="MySQL" title="MySQL"/>
                        </div>
                        <div className="techs-item">
                            <img src="/img/bootstrap.png" alt="Bootstrap" title="Bootstrap"/>                
                        </div>
                        <div className="techs-item">
                            <img src="/img/html.png" alt="HTML" title="HTML"/>                
                        </div>
                        <div className="techs-item">
                            <img src="/img/css.png" alt="CSS" title="CSS"/>                
                        </div>
                    </div>
                </div>
            </article>
            <footer>
            </footer>
        </section>
    );
}

export default Techs;