function Devops() {
    return (
        <div className="container py-5">

            {/* Header */}
            <header className="text-center mb-5">
                <h1 className="fw-bold">DevOps Course — Basic to Advanced</h1>
                <p className="text-muted fs-5">
                    A complete learning path covering the foundations, tools, automation, CI/CD,
                    containerization, cloud deployment, monitoring, and advanced DevOps practices.
                </p>
            </header>


            {/* ========================= BASIC SECTION ========================= */}
            <section className="mb-5">
                <h2 className="fw-bold text-primary mb-3">1. DevOps Basics</h2>

                <div className="card shadow-sm border-0">
                    <div className="card-body">

                        <p>
                            DevOps is a combination of “Development” and “Operations”.  
                            It focuses on improving communication, collaboration, and automation
                            across software development and IT operations.  
                            The goal is to deliver software faster, with fewer errors, and with continuous improvement.
                        </p>

                        <h5 className="fw-bold mt-3">Core Basic Concepts:</h5>
                        <ul>
                            <li>What is DevOps?</li>
                            <li>DevOps lifecycle</li>
                            <li>Agile & DevOps relationship</li>
                            <li>Continuous Integration & Continuous Delivery (CI/CD)</li>
                            <li>Version Control (Git fundamentals)</li>
                        </ul>

                    </div>
                </div>
            </section>



            {/* ========================= INTERMEDIATE SECTION ========================= */}
            <section className="mb-5">
                <h2 className="fw-bold text-success mb-3">2. Intermediate DevOps</h2>

                <div className="card shadow-sm border-0">
                    <div className="card-body">

                        <p>
                            At this stage, you learn essential tools used daily by DevOps engineers.
                            These tools help automate processes, manage configurations, build pipelines,
                            monitor systems, and deploy applications efficiently.
                        </p>

                        <h5 className="fw-bold mt-3">Intermediate Tools & Concepts:</h5>
                        <ul>
                            <li>Linux basics & shell scripting</li>
                            <li>Git & GitHub advanced workflows</li>
                            <li>Jenkins CI/CD pipelines</li>
                            <li>Docker containerization</li>
                            <li>Kubernetes (K8s) basics</li>
                            <li>Config Management: Ansible / Chef / Puppet</li>
                            <li>Infrastructure as Code: Terraform</li>
                        </ul>

                    </div>
                </div>
            </section>



            {/* ========================= ADVANCED SECTION ========================= */}
            <section className="mb-5">
                <h2 className="fw-bold text-danger mb-3">3. Advanced DevOps</h2>

                <div className="card shadow-sm border-0">
                    <div className="card-body">

                        <p>
                            Advanced DevOps focuses on cloud-native architectures, security,
                            automation at scale, high-availability systems, and full observability.
                            These skills allow you to manage large production environments confidently.
                        </p>

                        <h5 className="fw-bold mt-3">Advanced Topics:</h5>
                        <ul>
                            <li>Advanced Kubernetes (Ingress, Helm, StatefulSets, Operators)</li>
                            <li>Cloud Platforms: AWS, Azure, GCP deployments</li>
                            <li>Advanced Terraform modules & cloud automation</li>
                            <li>DevSecOps & security automation</li>
                            <li>Monitoring: Prometheus, Grafana, ELK/EFK stack</li>
                            <li>Scaling & load balancing (Nginx, HAProxy)</li>
                            <li>Microservices architecture & service mesh (Istio, Linkerd)</li>
                        </ul>

                    </div>
                </div>
            </section>



            {/* ========================= CONCLUSION ========================= */}
            <section className="mb-5">
                <div className="card shadow-sm border-0">
                    <div className="card-body text-center">
                        <h4 className="fw-bold mb-3">Congratulations!</h4>
                        <p className="text-muted">
                            You now have a complete DevOps learning roadmap — from fundamentals to advanced topics.
                            Follow this structured path and practice regularly to become a strong DevOps engineer.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Devops;
