import 'bootstrap/dist/css/bootstrap.min.css';

function Basics() {
    return (
        <>
            <section className="container my-5">
                <h2 className="text-center mb-4 fw-bold text-primary">
                    Online Marketing Basics
                </h2>

                <div className="row">

                    {/* What is Online Marketing */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">What is Online Marketing?</h4>
                                <p>
                                    Online marketing is the process of promoting your product or 
                                    service through the Internet. In this, social media, Google search,
                                     email, website and ads are used.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Online Marketing is Important */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">Why is Online Marketing Important?</h4>
                                <ul>
                                    <li>Global Audience Reach</li>
                                    <li>Low Cost Marketing</li>
                                    <li>Fast Results</li>
                                    <li>Targeted Ads to Users</li>
                                    <li>Rapid Business Growth</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Types of Online Marketing */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">Types of Online Marketing</h4>
                                <ul>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Search Engine Marketing (SEM)</li>
                                    <li>Social Media Marketing (SMM)</li>
                                    <li>Content Marketing</li>
                                    <li>Email Marketing</li>
                                    <li>Affiliate Marketing</li>
                                    <li>Influencer Marketing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* How Does Online Marketing Work */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h4 className="fw-bold text-success">How Does Online Marketing Work?</h4>
                                <p>
                                    In online marketing, you create content, run ads, analyze the audience,
                                    and develop strategies based on their behavior.  
                                    Then, you measure performance through analytics.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Basics;
