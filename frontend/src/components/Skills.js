const Skills = () => {
    return ( 
        <section id="skills" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="title-box text-center white">
                        <h2 className="title">what we do</h2>
                    </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            
                            <h4>precision agriculture</h4>
                            <p>Leveraging spatial tools to optimize output for commercial farms</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                           
                            <h4>Spatial Intelligence</h4>
                            <p>Mapping interactions on networks with focus on influences of processes</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                            
                            <h4>Spatial Modelling</h4>
                            <p>Multiperspective approach to designing models</p>
                        </div>

                        <div className="col-sm-3 col-md-3 col-lg-3 pie-chart-main">
                           
                            <h4>Integrated Analytics</h4>
                            <p>Contextualization of dynamics for results-oriented analysis</p>
                        </div>

                </div>
                </div>
        </section>
     );
}
 
export default Skills;