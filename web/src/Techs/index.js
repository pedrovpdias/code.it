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
                            <h3>ReactJS</h3>
                            <p className="desc">
                                O <strong>React</strong> é a biblioteca mais popular do <strong>JavaScript</strong> e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.
                            </p>                           
                        </div>
                        <div className="techs-item">
                            <img src="/img/node.png" alt="Node.js" title="Node.js"/>  
                            <h3>Node.js</h3>
                            <p className="desc">
                            <strong>Node.js</strong> é um runtime utilizado para executar aplicações <strong>JavaScript</strong>. Neste cenário, além de oferecer um ambiente multiplataforma, recursos são disponibilizados para apoiar na implementação de aplicações.
                            </p>             
                        </div>
                        <div className="techs-item">
                            <img src="/img/react-native.png" alt="React Native" title="React Native"/>
                            <h3>React Native</h3>
                            <p className="desc">
                                O <strong>React Native</strong> é um projeto comandado pelos engenheiros de uma das maiores redes sociais da atualidade, o <strong>Facebook</strong>. Ele traz diversas ferramentas para a criação de aplicativos móveis do tipo nativo, voltados para plataformas <strong>Android</strong> e <strong>iOS</strong>.
                            </p>
                        </div>
                        <div className="techs-item">
                            <img src="/img/mongodb.png" alt="MongoDB" title="MongoDB"/>  
                            <h3>MongoDB</h3>
                            <p className="desc">
                                O <strong>MongoDB</strong> é um banco de dados open-source que usa paradigma de documentos, predominantes quando se trata de modelos de banco de dados.
                            </p>             
                        </div>
                        <div className="techs-item">
                            <img src="/img/codeigniter.png" alt="Codeigniter PHP" title="Codeigniter PHP"/>
                            <h3>Codeigniter</h3>
                            <p className="desc">
                                O <strong>CodeIgniter</strong> é um framework para desenvolvimento de aplicações em <strong>PHP</strong>. Um toolkit cujo objetivo é habilitar você a desenvolver projetos muito mais rápido do que você poderia fazer sem o uso de um framework.
                            </p>
                        </div>
                        <div className="techs-item">
                            <img src="/img/mysql.png" alt="MySQL" title="MySQL"/>
                            <h3>MySQL</h3>
                            <p className="desc">
                                O <strong>MySQL</strong> é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas para gerir suas bases de dados. O serviço utiliza a linguagem <strong>SQL</strong>, que é a linguagem mais popular para inserir, acessar e gerenciar o conteúdo armazenado num banco de dados.
                            </p>
                        </div>
                        <div className="techs-item">
                            <img src="/img/bootstrap.png" alt="Bootstrap" title="Bootstrap"/> 
                            <h3>Bootstrap</h3>
                            <p className="desc">
                                O <strong>Bootstrap</strong> é uma ferramenta para desenvolvimento HTML, CSS e JS que permite criar aplicações completas com variáveis e mixins Sass, sistemas de grid responsivo, componentes pré-construídos e poderosos plugins com <strong>jQuery</strong>.
                            </p>              
                        </div>
                        <div className="techs-item">
                            <img src="/img/wordpress.png" alt="WordPress" title="WordPress"/> 
                            <h3>WordPress</h3>
                            <p className="desc">
                                O <strong>WordPress</strong> é <strong>CMS</strong> para publicação de blogs e sites na internet com foco na estética, nos Padrões Web e na usabilidade sendo hoje a maior plataforma de Gerenciamento de Conteúdo do mundo, com aproximadamente 59% do mercado de CMS e 27.5% de toda web.
                            </p>              
                        </div>
                        <div className="techs-item">
                            <img src="/img/joomla.png" alt="Joomla" title="Joomla"/>  
                            <h3>Joomla</h3>
                            <p className="desc">
                                O <strong>Joomla</strong> é uma ferramenta de <strong>CMS</strong>, e está entre as mais utilizadas em todo o mundo. Trata-se de uma plataforma de gerenciamento de site que é muito utilizada, muito por conta dos diversos benefícios que oferece para as empresas.
                            </p>             
                        </div>
                        <div className="techs-item">
                            <img src="/img/html.png" alt="HTML" title="HTML"/> 
                            <h3>HTML 5</h3>
                            <p className="desc">
                                O <strong>HTML</strong> é a liguagem base da internet. Foi criada para ser de fácil entendimento por seres humanos e também por máquinas, como por exemplo o Google ou outros sistemas que percorrem a internet capturando informação.
                            </p>              
                        </div>
                        <div className="techs-item">
                            <img src="/img/css.png" alt="CSS" title="CSS"/> 
                            <h3>CSS 3</h3>
                            <p className="desc">
                                O <strong>Cascading Style Sheets</strong> é uma folha de estilo composta por camadas e utilizada para definir a apresentação (aparência) em páginas da internet que adotam para o seu desenvolvimento linguagens de marcação (como XML, HTML e XHTML)
                            </p>              
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